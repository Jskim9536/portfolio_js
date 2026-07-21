"use client";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

interface AnimateInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
}

export default function AnimateIn({
  children,
  className,
  delay = 0,
  direction = "up",
}: AnimateInProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const shouldReduceMotion = useReducedMotion() ?? false;

  const initial = {
    opacity: 0,
    y: shouldReduceMotion ? 0 : direction === "up" ? 18 : 0,
    x: shouldReduceMotion ? 0 : direction === "left" ? -18 : direction === "right" ? 18 : 0,
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : initial}
      transition={{
        duration: shouldReduceMotion ? 0.2 : 0.46,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.23, 1, 0.32, 1] as [number, number, number, number],
      }}
    >
      {children}
    </motion.div>
  );
}
