"use client";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <header className="sticky top-0 z-50 glass-nav shadow-[0px_18px_40px_rgba(25,28,29,0.035)]">
      <nav className="flex justify-between items-center w-full px-5 md:px-8 py-3.5 md:py-5 max-w-7xl mx-auto">
        <div className="text-lg md:text-xl font-bold tracking-[-0.04em] text-[#1a2540] uppercase">
          JUNSEOK KIM
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8 font-medium text-[#1a2540] tracking-[-0.01em]">
          <a className="text-primary border-b-2 border-primary pb-1 hover:text-primary transition-colors duration-[180ms] ease-[var(--ease-out)]" href="#work">Work</a>
          <a className="text-[#1a2540] opacity-75 hover:opacity-100 hover:text-primary transition-[color,opacity] duration-[180ms] ease-[var(--ease-out)]" href="#about">About</a>
          <a className="text-[#1a2540] opacity-75 hover:opacity-100 hover:text-primary transition-[color,opacity] duration-[180ms] ease-[var(--ease-out)]" href="#contact">Contact</a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden md:inline-flex gradient-primary pressable text-white px-4 md:px-6 py-2 md:py-2.5 rounded-lg text-sm md:text-base font-medium tracking-[-0.01em] shadow-[0_8px_20px_rgba(37,99,235,0.18)]"
          >
            Contact
          </a>
          {/* Mobile hamburger */}
          <button
            className="md:hidden pressable flex flex-col gap-1.5 p-2 -mr-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={menuOpen}
          >
            <span className={`block w-5 h-0.5 bg-[#1a2540] transition-transform duration-[180ms] ease-[var(--ease-out)] ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-[#1a2540] transition-opacity duration-[140ms] ease-[var(--ease-out)] ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-[#1a2540] transition-transform duration-[180ms] ease-[var(--ease-out)] ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden px-5 pb-4 flex flex-col gap-3 border-t border-outline-variant/10 origin-top"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -8 }}
            transition={{
              duration: shouldReduceMotion ? 0.16 : 0.2,
              ease: [0.32, 0.72, 0, 1] as [number, number, number, number],
            }}
          >
            <a className="text-primary font-medium py-2" href="#work" onClick={() => setMenuOpen(false)}>Work</a>
            <a className="text-[#1a2540] font-medium py-2 opacity-80" href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a className="text-[#1a2540] font-medium py-2 opacity-80" href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
