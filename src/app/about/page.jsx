"use client";
import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    useGSAP(() => {
      // Make sure SplitText is registered
      gsap.registerPlugin(SplitText);
  
      const split = new SplitText("#about-title", { type: "chars" });
  
      gsap.set(split.chars, {
        y: 90,
      });
      gsap.timeline({
        paused: true,
      });
      gsap.to(split.chars, {
        y: 0,
        stagger: 0.05,
        delay: 0.2,
        duration: 0.5,
        ease: "power4.inout",
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      });
    });
  
  return (
    <div className="flex flex-col items-center justify-center py-[4rem] px-4">
      <main className="flex lg:flex-row flex-col  mx-auto py-[4rem] px-[1rem] gap-8">
        <section className="lg:w-1/3">
          <img src="/woman-jacket.jpg" alt="woman-smiling-demin-jacket" />
        </section>
        <section className="px-8 lg:w-2/3">
          <h1 id="about-title" className="font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
            About Me
          </h1>
          <p className="text-gray-700 mb-4">
            Hello! I'm <strong>Sujan Thapa</strong>, a passionate Computer
            Science and Information Technology (CSIT) student. I am enthusiastic
            about software development, problem-solving, and leveraging
            technology to create impactful solutions.
          </p>
          <p className="mb-4">
            My academic journey has equipped me with a solid foundation in
            programming languages such as JavaScript, Python, and Java, as well
            as experience with web development frameworks like React and
            Node.js. I enjoy collaborating on projects, learning new
            technologies, and continuously improving my skills.
          </p>
          <p className="mb-6">
            Outside of academics, I participate in coding competitions,
            contribute to open-source projects, and stay updated with the latest
            trends in technology. I am eager to apply my knowledge and
            creativity to real-world challenges and grow as a professional in
            the tech industry.
          </p>
          <ul className="mb-6 space-y-2">
            <li>
              <strong>Degree:</strong>
              <span className="text-gray-600 dark:text-gray-400">
                BSc CSIT (Bachelor of Science in Computer Science and
                Information Technology)
              </span>
            </li>
            <li>
              <strong>Interests:</strong>
              <span>Web Development, Algorithms, Open Source, SEO</span>
            </li>
            <li>
              <strong>Location:</strong>
              <span>Kathmandu, Nepal</span>
            </li>
            <li>
              <strong>Email:</strong>
              <span>[your.email@example.com]</span>
            </li>
          </ul>
          <div className="about-me-cta mt-6 flex">
            <a href="mailto:[your.email@example.com]">
              <button>Contact Me</button>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
