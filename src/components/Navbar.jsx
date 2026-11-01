import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 px-4 py-3 md:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Mobile Left: Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-gray-700 hover:text-black focus:outline-none p-1"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Brand Logo & Title */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg brand-gradient-bg flex items-center justify-center text-white font-black text-sm shadow-md">
            DS
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-900">Dev Stack</span>
        </div>

        {/* Center Links (Desktop) */}
        <div className="hidden md:flex items-center gap-8 font-medium text-slate-600 text-sm">
          <a href="#home" className="hover:text-purple-600 transition">Home</a>
          <a href="#tech" className="hover:text-purple-600 transition">Technologies</a>
          <a href="#projects" className="hover:text-purple-600 transition">Projects</a>
          <a href="#about" className="hover:text-purple-600 transition">About</a>
          <a href="#contact" className="hover:text-purple-600 transition">Contact</a>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <button className="text-sm font-semibold text-slate-700 hover:text-purple-600 px-3 py-1.5 transition">
            Sign In
          </button>
          <button className="text-sm font-semibold text-white brand-gradient-bg px-4 py-2 rounded-full shadow-md hover:opacity-90 transition">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden mt-3 pt-3 border-t border-gray-100 flex flex-col gap-3 font-medium text-slate-600 text-sm">
          <a href="#home" className="hover:text-purple-600">Home</a>
          <a href="#tech" className="hover:text-purple-600">Technologies</a>
          <a href="#projects" className="hover:text-purple-600">Projects</a>
          <a href="#about" className="hover:text-purple-600">About</a>
          <a href="#contact" className="hover:text-purple-600">Contact</a>
        </div>
      )}
    </nav>
  );
}