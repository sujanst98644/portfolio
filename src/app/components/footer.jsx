import React from "react";

export default function Foot() {
    return (
        <footer className="bg-gray-200 text-gray-300 py-8 flex flex-col items-center justify-center">
            <main >
                <div className="px-4 flex flex-col md:flex-row items-center justify-between">
                    {/* Logo and Name */}
                <div className="flex items-center mb-4 md:mb-0">
                    <p className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl mr-3">
                        {/* Replace with your logo or initials */}
                        S
                    </p>
                    <p className="text-black font-semibold text-lg tracking-wide">Sujan's Portfolio</p>
                </div>
                {/* Links */}
                <nav className="flex flex-wrap gap-6 text-sm">
                    <a href="#about" className="hover:text-white transition">About</a>
                    <a href="#projects" className="hover:text-white transition">Projects</a>
                    <a href="#skills" className="hover:text-white transition">Skills</a>
                    <a href="#contact" className="hover:text-white transition">Contact</a>
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">GitHub</a>
                    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">LinkedIn</a>
                </nav>
                </div>
                <div className="container mx-auto px-4 mt-6 border-t border-gray-700 pt-4 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
                <span>&copy; {new Date().getFullYear()} Sujan. All rights reserved.</span>
                <span>
                    Built with <a href="https://react.dev/" className="underline hover:text-white">React</a> &amp; <a href="https://tailwindcss.com/" className="underline hover:text-white">Tailwind CSS</a>
                </span>
            </div>
            </main>
            
        </footer>
    );
}