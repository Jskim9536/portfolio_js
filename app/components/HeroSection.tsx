import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="py-24 md:py-32 max-w-7xl mx-auto px-8 grid grid-cols-12 gap-6">
      <div className="col-span-12 md:col-span-8">
        <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">
          PRODUCT OWNER · PM/PO · 5 YEARS EXPERIENCE
        </span>
        <h1 className="text-6xl md:text-8xl tracking-tighter text-[#1a2540] mb-6 leading-[0.9] font-medium">
          JUNSEOK
          <br />
          KIM
        </h1>
        <p className="text-2xl font-light text-secondary mb-6">
          Founder-Minded Product Owner &amp; Problem Solver
        </p>
        <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed mb-10 font-light">
          안녕하세요, <br />
          일을 되게 만드는 서비스 기획자 <br />
          김준석입니다.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#work"
            className="gradient-primary text-white px-8 py-4 rounded-xl font-medium flex items-center gap-2 group transition-all"
          >
            View Work{" "}
            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
              north_east
            </span>
          </a>
        </div>
      </div>
      <div className="hidden md:block col-span-4 self-end">
        <div className="aspect-[4/5] rounded-full overflow-hidden bg-surface-container-high relative">
          <Image
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            src="https://lh3.googleusercontent.com/aida/ADBb0ujRQ0MBfTZ-dMHXdfm4rldSOHI59Sv9HdRZrxTq1GugoaJhc6xLM-Yck1InGgA6XFbhW386Y8wUgU_z89040p6JIRoBva9mdzA4IOqxJwiZW5EryZDSVU7EhqyahRVj6aEzCqB9C2zSwPyFehNdZSQfa5zYtZ-uj0QyM8cnumDoNuHkU-vEb48NMui1NPoFLWSlTSctS4rbyzV6fd4zfghaQpw3dfBP-BOJcjzfewaQjXNhJuPgK7h-vCxEoQWX_1dHAuSwyFkUmA"
            alt="Professional portrait of Junseok Kim"
            fill
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}
