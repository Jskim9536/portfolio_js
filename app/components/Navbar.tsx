export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 glass-nav shadow-[0px_20px_40px_rgba(25,28,29,0.04)]">
      <nav className="flex justify-between items-center w-full px-8 py-6 max-w-7xl mx-auto">
        <div className="text-xl font-bold tracking-tighter text-[#1a2540] uppercase">
          JUNSEOK KIM
        </div>
        <div className="hidden md:flex items-center gap-8 font-medium text-[#1a2540] tracking-tight">
          <a
            className="text-primary border-b-2 border-primary pb-1 hover:text-primary transition-colors duration-300"
            href="#work"
          >
            Work
          </a>
          <a
            className="text-[#1a2540] opacity-80 hover:text-primary transition-colors duration-300"
            href="#about"
          >
            About
          </a>
          <a
            className="text-[#1a2540] opacity-80 hover:text-primary transition-colors duration-300"
            href="#contact"
          >
            Contact
          </a>
        </div>
        <button className="gradient-primary text-white px-6 py-2.5 rounded-lg font-medium tracking-tight transition-all hover:shadow-lg active:scale-90">
          Let&apos;s Talk
        </button>
      </nav>
    </header>
  );
}
