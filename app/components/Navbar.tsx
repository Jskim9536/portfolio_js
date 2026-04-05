"use client";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass-nav shadow-[0px_20px_40px_rgba(25,28,29,0.04)]">
      <nav className="flex justify-between items-center w-full px-5 md:px-8 py-4 md:py-6 max-w-7xl mx-auto">
        <div className="text-lg md:text-xl font-bold tracking-tighter text-[#1a2540] uppercase">
          JUNSEOK KIM
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8 font-medium text-[#1a2540] tracking-tight">
          <a className="text-primary border-b-2 border-primary pb-1 hover:text-primary transition-colors duration-300" href="#work">Work</a>
          <a className="text-[#1a2540] opacity-80 hover:text-primary transition-colors duration-300" href="#about">About</a>
          <a className="text-[#1a2540] opacity-80 hover:text-primary transition-colors duration-300" href="#contact">Contact</a>
        </div>

        <div className="flex items-center gap-3">
          <button
            className="gradient-primary text-white px-4 md:px-6 py-2 md:py-2.5 rounded-lg text-sm md:text-base font-medium tracking-tight transition-all hover:shadow-lg active:scale-90"
          >
            Contact
          </button>
          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="메뉴 열기"
          >
            <span className={`block w-5 h-0.5 bg-[#1a2540] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-[#1a2540] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-[#1a2540] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden px-5 pb-4 flex flex-col gap-4 border-t border-outline-variant/10">
          <a className="text-primary font-medium py-2" href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a className="text-[#1a2540] font-medium py-2 opacity-80" href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a className="text-[#1a2540] font-medium py-2 opacity-80" href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      )}
    </header>
  );
}
