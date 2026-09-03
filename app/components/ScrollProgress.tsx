"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const reduced = useReducedMotion() ?? false;
  const scaleX = useSpring(scrollYProgress, {
    stiffness: reduced ? 1000 : 110,
    damping: reduced ? 1000 : 24,
    mass: 0.22,
  });

  return <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />;
}
