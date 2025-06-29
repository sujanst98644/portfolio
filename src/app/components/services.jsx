"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Web Development",
    description:
      "Building responsive and modern websites using the latest technologies.",
    icon: "🌐",
    image: "./web-development.jpg",
  },
  {
    title: "UI/UX Design",
    description:
      "Designing intuitive user interfaces and seamless user experiences.",
    icon: "🎨",
    image: "./UIUX.jpg",
  },
  {
    title: "Backend Development",
    description: "Creating robust server-side applications and APIs.",
    icon: "🛠️",
    image: "./Backend.jpg",
  },
];

const Services = () => {
  const containersRef = useRef([]);

  useEffect(() => {
    containersRef.current.forEach((el, i) => {
      const mask = el.querySelector(".white-mask");

      gsap.set(mask, {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)", // Initially full white mask
      });

      gsap.to(mask, {
        clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)", // Reveal from left to right
        scrollTrigger: {
          trigger: el,
          start: "top 50%",
          end: "top -10%",
          // scrub: true,
          toggleActions: "play reverse play reverse",
        },
        ease: "power4.inout",
        duration: 1,
      });
    });
  }, []);

  return (
    <div className="w-full py-16">
      <div className="text-center space-y-10 ">
        <h2 className="text-3xl font-bold">My Services</h2>
        <p className="text-gray-400">
          Here are some of the services I offer to help you achieve your goals.
        </p>

        <div className="flex flex-col justify-center w-full">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden h-[60vh] flex  w-full"
              ref={(el) => (containersRef.current[idx] = el)}
            >
              {/* WHITE MASK OVERLAY */}
              <div className="white-mask absolute inset-0 bg-white z-20 pointer-events-none text-left w-full flex">
                <div className="p-8 w-full flex flex-col justify-center z-30">
                  <h1>{service.title}</h1>
                  <p>{service.description}</p>
                </div>
              </div>

              {/* CONTENT LAYER */}
              <div className="relative z-10 flex w-full text-left">
                <div className="bg-[#282828] text-white p-8 w-full flex flex-col justify-center z-30">
                  <h1>{service.title}</h1>
                  <p>{service.description}</p>
                </div>
                <div
                  className="w-[70%] bg-cover bg-center hidden md:block"
                  style={{ backgroundImage: `url("${service.image}")` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
