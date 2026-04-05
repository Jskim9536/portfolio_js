"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];
const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease },
});

export default function HeroSection() {
  return (
    <section className="py-14 md:py-32 max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-12 gap-6">
      <div className="col-span-12 md:col-span-8">
        <motion.span
          {...fadeUp(0.1)}
          className="text-primary font-bold tracking-widest text-[10px] md:text-xs uppercase mb-3 md:mb-4 block"
        >
          PRODUCT OWNER · PM/PO · 6 YEARS EXPERIENCE
        </motion.span>
        <motion.h1
          {...fadeUp(0.2)}
          className="text-5xl md:text-7xl tracking-tighter text-[#1a2540] mb-4 md:mb-6 leading-[0.9] font-medium"
        >
          JUNSEOK
          <br />
          KIM
        </motion.h1>
        <motion.p {...fadeUp(0.35)} className="text-lg md:text-2xl font-light text-secondary mb-4 md:mb-6">
          Founder-Minded Product Owner &amp; Problem Solver
        </motion.p>
        <motion.p
          {...fadeUp(0.45)}
          className="text-base md:text-xl text-on-surface-variant max-w-2xl leading-relaxed mb-8 md:mb-10 font-light"
        >
          안녕하세요, <br />
          비즈니스 성장을 만들어내는 기획자(PM/PO) <br />
          김준석입니다.
        </motion.p>
        <motion.div {...fadeUp(0.55)} className="flex flex-wrap gap-3 md:gap-4">
          <a
            href="#work"
            className="gradient-primary text-white px-6 md:px-8 py-3 md:py-4 rounded-xl text-sm md:text-base font-medium flex items-center gap-2 group transition-all"
          >
            View Work{" "}
            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
              north_east
            </span>
          </a>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.3, ease }}
        className="hidden md:block col-span-4 self-end"
      >
        <div className="aspect-[4/5] rounded-full overflow-hidden bg-surface-container-high relative">
          <Image
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            src="https://lh3.googleusercontent.com/aida/ADBb0ujRQ0MBfTZ-dMHXdfm4rldSOHI59Sv9HdRZrxTq1GugoaJhc6xLM-Yck1InGgA6XFbhW386Y8wUgU_z89040p6JIRoBva9mdzA4IOqxJwiZW5EryZDSVU7EhqyahRVj6aEzCqB9C2zSwPyFehNdZSQfa5zYtZ-uj0QyM8cnumDoNuHkU-vEb48NMui1NPoFLWSlTSctS4rbyzV6fd4zfghaQpw3dfBP-BOJcjzfewaQjXNhJuPgK7h-vCxEoQWX_1dHAuSwyFkUmA"
            alt="Professional portrait of Junseok Kim"
            fill
            unoptimized
          />
        </div>
      </motion.div>
    </section>
  );
}
