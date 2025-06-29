"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        title: "Portfolio Website",
        description: "A minimal portfolio built with React and GSAP.",
        image: "/site1.jpg",
        link: "#",
    },
    {
        title: "E-commerce App",
        description: "A modern e-commerce platform with Stripe integration.",
        image: "/site2.jpg",
        link: "#",
    },
    {
        title: "Blog Platform",
        description: "A fast, SEO-friendly blog platform.",
        image: "/site3.jpg",
        link: "#",
    },
    {
        title: "Task Manager",
        description: "A productivity app to manage daily tasks efficiently.",
        image: "/site4.jpg",
        link: "#",
    },
    {
        title: "Photo Gallery",
        description: "A responsive gallery for showcasing images.",
        image: "/site1.jpg",
        link: "#",
    },
];

export default function Projects() {
    const containerRef = useRef(null);

    useEffect(() => {
        const items = gsap.utils.toArray(".project-item");
        items.forEach((item) => {
            gsap.fromTo(
                item,
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power4.inout",
                    scrollTrigger: {
                        trigger: item,
                        start: "top 80%",
                        end: "bottom 20%",
                    },
                }
            );
            // Parallax image
            const img = item.querySelector(".project-img");
            gsap.to(img, {
                y: -40,
                ease: "power4.inout",
                scrollTrigger: {
                    trigger: item,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            });
        });
        return () => ScrollTrigger.getAll().forEach((t) => t.kill());
    }, []);

    return (
        <div
            ref={containerRef}
            className="flex flex-col items-center justify-center space-y-10 py-[4rem] px-4"
        >
            <h1 className="text-center">
                Projects
            </h1>
            <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {projects.map((project, idx) => (
                    <a
                        href={project.link}
                        key={idx}
                        className="project-item flex flex-col bg-white rounded-xl shadow-md overflow-hidden transition-all duration-200 hover:shadow-xl hover:-translate-y-2 trasition-all ease-in-out 0.5s"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="project-img w-full h-[200px] bg-gray-200 flex items-center justify-center overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover block"
                            />
                        </div>
                        <div className="flex flex-col p-4">
                            <h5 className="text-lg font-semibold tracking-tight">
                                {project.title}
                            </h5>
                            <p className="text-gray-600 ">
                                {project.description}
                            </p>
                        </div>
                    </a>
                ))}
            </main>
        </div>
    );
}
