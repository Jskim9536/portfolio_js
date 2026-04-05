export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass-nav">
      <div className="flex justify-between items-center px-10 py-6 max-w-[1440px] mx-auto">
        <div className="text-2xl font-black tracking-tighter text-primary font-headline uppercase">
          NARRATIVE
        </div>
        <div className="hidden md:flex items-center gap-12">
          <a
            className="font-headline tracking-tighter font-bold uppercase text-primary border-b-2 border-primary pb-1"
            href="#"
          >
            Work
          </a>
          <a
            className="font-headline tracking-tighter font-bold uppercase text-white/70 hover:text-white transition-colors duration-300"
            href="#"
          >
            About
          </a>
          <a
            className="font-headline tracking-tighter font-bold uppercase text-white/70 hover:text-white transition-colors duration-300"
            href="#"
          >
            Contact
          </a>
        </div>
        <button className="metallic-gradient text-on-primary px-8 py-3 font-headline font-bold uppercase tracking-widest text-xs rounded-lg hover:opacity-80 transition-opacity">
          Let&apos;s Talk
        </button>
      </div>
    </nav>
  );
}
