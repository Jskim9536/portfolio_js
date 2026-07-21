export default function Footer() {
  return (
    <footer className="bg-surface-container-low py-12 border-t border-outline-variant/10">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-8 max-w-7xl mx-auto gap-4 text-sm font-medium text-[#1a2540]">
        <div className="text-lg font-bold tracking-[-0.04em] text-[#1a2540] uppercase">
          © 2026 JUNSEOK KIM
        </div>
        <div className="flex gap-8">
          <a
            className="opacity-70 hover:opacity-100 hover:text-primary transition-[color,opacity] duration-[180ms] ease-[var(--ease-out)]"
            href="https://www.linkedin.com/in/junseok-kim-2611351b6/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="opacity-70 hover:opacity-100 hover:text-primary transition-[color,opacity] duration-[180ms] ease-[var(--ease-out)]"
            href="mailto:jskim9536@gmail.com"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
