"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const blogs = [
  {
    title: "Minimalism in Web Design",
    summary: "Exploring the beauty of less in modern web interfaces.",
    image: "https://source.unsplash.com/400x250/?minimal,webdesign",
  },
  {
    title: "React Performance Tips",
    summary: "How to keep your React apps fast and responsive.",
    image: "https://source.unsplash.com/400x250/?react,code",
  },
  {
    title: "GSAP Animations 101",
    summary: "A beginner's guide to smooth web animations.",
    image: "https://source.unsplash.com/400x250/?animation,creative",
  },
  {
    title: "Design Systems Demystified",
    summary: "Understanding the structure and logic of scalable design.",
    image: "https://source.unsplash.com/400x250/?design,system",
  },
];

export default function Blogs() {
  const blogRefs = useRef([]);

  useEffect(() => {
    blogRefs.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay: i * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section className="bg-white min-h-screen py-20 px-6 text-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold mb-3">Articles & Insights</h1>
          <p className="text-gray-500">
            A curated collection of articles, tutorials, and resources from my experiences.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, idx) => (
            <article
              key={blog.title}
              ref={(el) => (blogRefs.current[idx] = el)}
              className="bg-gray-50 border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="w-full h-48 bg-gray-200 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h5 className="text-xl font-semibold text-gray-800 mb-2">
                  {blog.title}
                </h5>
                <p className="text-gray-600 ">{blog.summary}</p>
                <span className="text-gray-400 hover:text-gray-600">
                  Read More →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
