"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CountUp from "./CountUp";

const stats = [
  { value: "+70%", title: "파트너 네트워크 성장", desc: "마카롱팩토리 입점 퍼널 개선" },
  { value: "3x",   title: "글로벌 매출 성장",    desc: "영국→미국/호주/캐나다 확장" },
  { value: "-90%", title: "운영 리소스 절감",    desc: "물류 WMS 고도화 시스템" },
  { value: "-33.3%", title: "파트너 VoC 감소",  desc: "재고·정산 앱 개선" },
];

export default function ImpactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-12 md:py-20 border-t border-outline-variant/10 max-w-7xl mx-auto px-5 md:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="flex flex-col gap-2 md:gap-3 p-5 md:p-8 rounded-2xl bg-surface-container-low border border-outline-variant/10 transition-colors hover:bg-surface-container"
          >
            <div className="flex items-center gap-2">
              <CountUp
                value={stat.value}
                className="text-3xl md:text-5xl font-light-custom text-on-surface tracking-tighter"
              />
              <div className="w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
            </div>
            <div>
              <p className="font-medium text-sm md:text-lg text-[#1a2540] mb-0.5 md:mb-1">{stat.title}</p>
              <p className="text-xs md:text-sm font-light text-on-surface-variant">{stat.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
