"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimateIn from "./AnimateIn";

type ApproachCopy = {
  eyebrow: string;
  title: string;
  intro: string;
  items: readonly (readonly [string, string, string])[];
};

export default function ApproachScene({ copy }: { copy: ApproachCopy }) {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], reduced ? ["0%", "0%"] : ["-2%", "2%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, .5, 1], reduced ? [1, 1, 1] : [1.045, 1.015, 1.045]);

  return (
    <section ref={sectionRef} className="approach-section" id="approach">
      <motion.div className="approach-background" style={{ y: backgroundY, scale: backgroundScale }} aria-hidden="true">
        <Image src="/img/approach-glass-background.png" alt="" fill sizes="100vw" priority={false} />
      </motion.div>
      <div className="approach-wash" aria-hidden="true" />
      <div className="section-shell approach-scene-content">
        <AnimateIn className="section-heading">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2>{copy.title}</h2>
          <p>{copy.intro}</p>
        </AnimateIn>
        <div className="approach-list">
          {copy.items.map(([num, title, body], index) => (
            <AnimateIn key={num} delay={index * .1}>
              <article className="approach-item">
                <span>{num}</span>
                <div><h3>{title}</h3><p>{body}</p></div>
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
