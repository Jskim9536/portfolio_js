"use client";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.23, 1, 0.32, 1] as [number, number, number, number];
const fadeUp = (delay: number, shouldReduceMotion: boolean) => ({
  initial: { opacity: 0, y: shouldReduceMotion ? 0 : 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: shouldReduceMotion ? 0.2 : 0.52, delay: shouldReduceMotion ? 0 : delay, ease },
});

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <section className="py-16 md:py-28 max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-12 gap-8 md:gap-6">
      <div className="col-span-12 md:col-span-8">
        <motion.span
          {...fadeUp(0.08, shouldReduceMotion)}
          className="text-primary font-semibold tracking-[0.18em] text-[10px] md:text-xs uppercase mb-3 md:mb-4 block max-w-[20rem] md:max-w-none leading-relaxed"
        >
          AI Native Product Owner : PM/PO : 6 Years Experience
        </motion.span>
        <motion.h1
          {...fadeUp(0.16, shouldReduceMotion)}
          className="text-[clamp(3.1rem,13vw,4.8rem)] md:text-[clamp(4.8rem,8vw,6.8rem)] tracking-[-0.055em] text-[#1a2540] mb-4 md:mb-6 leading-[0.9] font-semibold"
        >
          Junseok Kim
        </motion.h1>
        <motion.p {...fadeUp(0.26, shouldReduceMotion)} className="text-lg md:text-2xl font-medium text-secondary mb-4 md:mb-6 tracking-[-0.015em]">
          Founder Minded, AI Native Product Owner
        </motion.p>
        <motion.p
          {...fadeUp(0.34, shouldReduceMotion)}
          className="text-base md:text-xl text-on-surface-variant max-w-2xl leading-[1.75] mb-8 md:mb-10 font-normal text-balance"
        >
          안녕하세요, AI로 실행의 속도와 밀도를 높여 비즈니스 성장을 만드는
          PM/PO 김준석입니다.
        </motion.p>
        <motion.div {...fadeUp(0.42, shouldReduceMotion)} className="flex flex-wrap gap-3 md:gap-4">
          <a
            href="#work"
            className="gradient-primary pressable text-white px-6 md:px-8 py-3 md:py-4 rounded-xl text-sm md:text-base font-medium flex items-center gap-2 group shadow-[0_12px_28px_rgba(37,99,235,0.22)]"
          >
            View Work{" "}
            <span className="material-symbols-outlined text-sm transition-transform duration-[180ms] ease-[var(--ease-out)] group-hover:translate-x-1 group-hover:-translate-y-1">
              north_east
            </span>
          </a>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: shouldReduceMotion ? 0.2 : 0.6, delay: shouldReduceMotion ? 0 : 0.18, ease }}
        className="hidden md:block col-span-4 self-end"
      >
        <div className="aspect-[4/5] rounded-full overflow-hidden bg-surface-container-high relative shadow-[0_24px_70px_rgba(26,37,64,0.12)]">
          <Image
            className="w-full h-full object-cover"
            src="/img/portfolio_main.png"
            alt="Professional portrait of Junseok Kim"
            fill
            sizes="(min-width: 768px) 33vw, 0px"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
}
