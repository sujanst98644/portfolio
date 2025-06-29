// import React from 'react'

// const Value = () => {
//   return (
//     <div className='w-full h-screen flex flex-col justify-center items-center'>
//         <div className=' w-full h-full' style={{
//             backgroundImage: "url('/home.jpg')",
//         }}>
//             <h1 className='text-3xl text-center text-white font-bold'></h1>
//         </div>
//         <div>

//         </div>
//     </div>
//   )
// }

// export default Value
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

const logos = [
  { name: "WordPress", src: "/wordpress.svg" },
  { name: "React", src: "/react.svg" },
  { name: "Next.js", src: "/nextjs.svg" },
  { name: "HTML", src: "/html.svg" },
  { name: "CSS", src: "/css.svg" },
  { name: "TailwindCSS", src: "/tailwindcss.svg" },
  { name: "JavaScript", src: "/js.svg" },
  { name: "MongoDB", src: "/mongodb.svg" },
  { name: "ExpressJS", src: "/express.svg" },
];

const Value = () => {
  const [active, setActive] = useState(0);
  const [radius, setRadius] = useState(230);
  const container = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % logos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const getRadius = () => (window.innerWidth >= 768 ? 230 : 150);
    setRadius(getRadius());

    const handleResize = () => {
      setRadius(getRadius());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  gsap.registerPlugin(ScrollTrigger, SplitText, ScrollSmoother);
  useEffect(() => {
    const split = new SplitText(".highlight-text", { type: "chars" });
    gsap.from(split.chars, {
      scrollTrigger: {
        trigger: ".highlight-text",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
      },
      opacity: 0.2,
      stagger: 0.1,
    });
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1, // 0 = no smooth, higher = more
      effects: true,
      speed: 1,
    });
    return () => {
      split.revert && split.revert();
    };
  }, []);

  return (
    <>
      <div
        id="smooth-wrapper"
        className="relative w-full p-10 flex flex-col items-center justify-end"
        style={
          {
            // backgroundImage: "url('/home.jpg')",
          }
        }
      >
        <img
          src="/home.jpg"
          alt="logo"
          className="absolute bottom-0 left-0 w-full h-full object-cover hidden"
          id="smooth-content"
        />
        <main className=" justify-center items-center z-20 flex flex-row w-full h-full ">
          <div className="w-full bg-white rounded-[5px] p-6 h-[500px]">
            <img src="/site1.jpg" alt="" className="object-cover" style={
              {
                objectFit: "cover",
                width: "100%",
                height: "100%",
                objectPosition: "center", 
              }
            }/>
          </div>
          <div className="w-full bg-white rounded-[5px] p-6">
            <h3>what can I do!?</h3>
            <div className="highlight-text  block text-black text-[20px] ">
              To increase your website's readability and attract more visitors,
              use clear and legible fonts with good contrast, organize your
              content using headings and whitespace, and choose a modern,
              consistent color palette.
            </div>
          </div>
        </main>
        {/* <img
          src="/home.jpg"
          alt="logo"
          className="w-full h-[700px] object-cover relative z-10"
        /> */}
      </div>
      <div
        className="flex flex-col w-full h-[400px] md:h-[500px] lg:h-[700px]"
        ref={container}
      >
        <div className="p-10 ">
          <h2 className="text-3xl text-center text-blue font-bold mb-4">
            My Expertise
          </h2>
          <p className="text-center text-gray-700 mb-6">
            I specialize in creating fast, scalable, and SEO-friendly websites
            using modern technologies like WordPress, Next.js, and React.
          </p>
        </div>
        {/* 3D Carousel Items */}
        <div className="w-full relative flex items-center justify-center">
          <div
            className="absolute left-1/2 top-40 my-[4rem]"
            style={{
              transform: "translate(-50%, -50%)",
              width: 400,
              height: 400,
            }}
          >
            {logos.map((logo, i) => {
              const total = logos.length;
              const angleOffset = 90;
              const angle =
                ((360 / total) * (i - active) + angleOffset) * (Math.PI / 180);

              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              const diff = Math.min(
                Math.abs(i - active),
                total - Math.abs(i - active)
              );

              const scale = 1.6 - diff * 0.2;
              const finalScale = scale < 0.6 ? 0.6 : scale;

              const blur = diff >= 3 ? "blur(1px)" : "none";
              const zIndex = i === active ? 4 : 2 - diff;
              const boxShadow =
                i === active
                  ? "0 10px 30px rgba(0,0,0,0.2)"
                  : "0 2px 6px rgba(0,0,0,0.08)";

              return (
                <img
                  key={logo.name}
                  src={logo.src}
                  alt={logo.name}
                  title={logo.name}
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    width: "70px",
                    height: "70px",
                    transform: `
                      translate(-50%, -50%)
                      translateX(${x}px)
                      translateY(${y}px)
                      scale(${finalScale})
                    `,
                    transition:
                      "transform 0.6s ease, filter 0.3s ease, box-shadow 0.3s ease",
                    zIndex,
                    filter: blur,
                    borderRadius: "50%",
                    padding: 8,
                    background: "#fff",
                  }}
                />
              );
            })}
          </div>
          {/* Center image */}
          <img
            src="/hero-image.png"
            alt="hero"
            className="absolute left-1/2 top-40 my-[4rem] -translate-x-1/2 -translate-y-1/2 rounded-full
              w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px]"
            style={{
              objectFit: "cover",
              zIndex: 3,
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Value;
