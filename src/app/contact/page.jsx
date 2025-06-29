"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Contact = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.from(containerRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power2.out",
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-screen bg-white text-gray-800 py-20 px-6 flex flex-col items-center justify-center"
    >
      <div className="max-w-3xl w-full text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
        <p className="text-gray-500 text-lg">
          Feel free to drop a message — whether you have a question, a project idea, or just want to say hello.
        </p>
      </div>

      <div className="w-full max-w-4xl flex flex-col md:flex-row gap-12 items-start">
        {/* Contact Form */}
        <form className="w-full md:w-1/2 space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black transition"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full p-3 rounded-lg border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-black transition"
          />
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition"
          >
            Send Message
          </button>
        </form>

        {/* Right Side Image or Info */}
        <div className="w-full md:w-1/2 flex flex-col items-center text-center space-y-6">
          <img
            src="/contact.png"
            alt="Contact illustration"
            className="w-full max-w-sm object-cover"
          />
          <div className="text-gray-500 text-sm">
            Or email me directly at
            <a
              href="mailto:your@email.com"
              className="text-black underline hover:text-gray-800"
            >
              your@email.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
