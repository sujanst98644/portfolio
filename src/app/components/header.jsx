import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex flex-col items-center">
      <main className="flex flex-row items-center justify-between w-full p-[1rem]">
        <h5 className="text-lg font-bold">My Portfolio.</h5>
        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-row justify-center space-x-10 items-center">
          <a href="#about" className="hover:underline">About</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <a href="#blog" className="hover:underline">Blog</a>
        </nav>
        {/* Desktop Button */}
        <button className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          get in touch
        </button>
        {/* Mobile/Tablet Menu Button */}
        <a
          className="md:hidden flex items-center px-3 py-2 rounded text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
            )}
          </svg>
        </a>
      </main>
      {/* Mobile/Tablet Fullscreen Nav */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center space-y-8 md:hidden">
          <a
            className="absolute top-6 right-6"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </a>
          <a href="#about" className="text-2xl" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#projects" className="text-2xl" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contact" className="text-2xl" onClick={() => setMenuOpen(false)}>Contact</a>
          <a href="#blog" className="text-2xl" onClick={() => setMenuOpen(false)}>Blog</a>
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
