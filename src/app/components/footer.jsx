import React from "react";

export default function Foot() {
  return (
    <footer className="bg-gray-200 text-black py-12 px-4">
      <main className="max-w-7xl mx-auto">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          {/* Logo + Description */}
          <div>
            <div className="flex items-center mb-4">
              <img src="/logo.png" alt="Logo" className="w-[300px]" />
            </div>
            <p className="text-sm max-w-xs">
              Showcasing my work, skills, and experiences as a web developer. Let’s build something together!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className=" font-semibold mb-3">Quick Links</h4>
            <ul className="text-sm space-y-2">
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#projects" className="hover:text-white">Projects</a></li>
              <li><a href="#skills" className="hover:text-white">Skills</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className=" font-semibold mb-3">Connect</h4>
            <ul className="text-sm space-y-2">
              <li>
                <a href="https://github.com/yourusername" target="_blank" className="hover:text-white">GitHub</a>
              </li>
              <li>
                <a href="https://linkedin.com/in/yourusername" target="_blank" className="hover:text-white">LinkedIn</a>
              </li>
              <li>
                <a href="mailto:your@email.com" className="hover:text-white">Email Me</a>
              </li>
            </ul>
          </div>

          {/* Newsletter (Optional) */}
          <div>
            <h4 className=" font-semibold mb-3">Newsletter</h4>
            <p className="text-sm text-gray mb-2">Stay updated with my latest projects.</p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 rounded bg-gray-400 text-white placeholder:text-gray-100 text-sm"
              />
              <button className="bg-[#f04161] text-white px-3 py-2 rounded text-sm hover:bg-pink-600">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <span>&copy; {new Date().getFullYear()} Sujan. All rights reserved.</span>
          <span>
            Built with <a href="https://react.dev/" className="underline hover:text-white">React</a> &amp; <a href="https://tailwindcss.com/" className="underline hover:text-white">Tailwind CSS</a>
          </span>
        </div>
      </main>
    </footer>
  );
}
