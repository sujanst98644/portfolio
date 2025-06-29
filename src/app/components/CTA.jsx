import React from "react";
import Link from "next/link";

const CTA = () => (
  <div
    className="w-full bg-gray-600 text-white py-[4rem] px-4 text-center"
    aria-label="Call to Action"
  >
    <h2 className="text-4xl font-bold mb-4">
      Ready to start your next project?
    </h2>
    <p className="text-lg mb-8 max-w-xl mx-auto">
      Let’s work together to build something amazing. Contact me today and let’s
      bring your ideas to life!
    </p>
    <button
      onClick={() => (window.location.href = "/contact")}
      className=""
      aria-label="Contact me"
    >
      Contact Me
    </button>
  </div>
);

export default CTA;
