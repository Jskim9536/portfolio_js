const links = ["LinkedIn", "Dribbble", "Instagram", "Email"];

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest w-full pt-32 pb-16">
      <div className="flex flex-col items-center gap-8 px-10 w-full">
        <div className="text-xl font-bold text-white font-headline tracking-tighter uppercase">
          NARRATIVE
        </div>
        <div className="flex flex-wrap justify-center gap-10">
          {links.map((link) => (
            <a
              key={link}
              className="font-body text-sm tracking-widest uppercase text-white/40 hover:text-primary transition-all duration-500"
              href="#"
            >
              {link}
            </a>
          ))}
        </div>
        <div className="w-24 h-px bg-outline-variant/30 my-4"></div>
        <p className="font-body text-sm tracking-widest uppercase text-white/40 text-center">
          © 2024 Narrative Canvas. Crafted for the Editorial Architect.
        </p>
      </div>
    </footer>
  );
}
