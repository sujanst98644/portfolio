import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex flex-col items-center sticky top-0 z-50 shadow-sm bg-white ">
      <main className="flex flex-row items-center justify-between w-full p-[0.5rem]">
        <Link href="/" className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-15" />
        </Link>
        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-row justify-center space-x-10 items-center text-black">
          <Link href="/about" className="hover:underline" >
            About
          </Link>
          <Link href="/projects" className="hover:underline">
            Projects
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
          <Link href="/blogs" className="hover:underline">
            Blog
          </Link>
        </nav>
        {/* Desktop Button */}
        <button className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          get in touch
        </button>
        {/* Mobile/Tablet Menu Button */}
        <button
          className="md:hidden flex items-center px-3 py-2 rounded text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 8h16M4 16h16"
              />
            )}
          </svg>
        </button>
      </main>
      {/* Mobile/Tablet Fullscreen Nav */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center space-y-8 md:hidden">
          <button
            className="absolute top-6 right-6"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg
              className="h-8 w-8"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <Link
            href="#about"
            className="text-2xl"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="#projects"
            className="text-2xl"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="text-2xl"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="#blog"
            className="text-2xl"
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </Link>
          <button
            className="bg-blue-600 text-white px-6 py-3 rounded text-lg mt-4"
            onClick={() => setMenuOpen(false)}
          >
            get in touch
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
