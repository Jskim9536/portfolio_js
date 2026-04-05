"use client";
import { useInView, useMotionValue, useSpring, animate } from "framer-motion";
import { useEffect, useRef } from "react";

interface CountUpProps {
  value: string; // e.g. "+70%", "3x", "-90%", "-33.3%"
  className?: string;
}

export default function CountUp({ value, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView || !ref.current) return;

    // Extract numeric part and surrounding text
    const match = value.match(/^([+\-]?)(\d+\.?\d*)(.*)$/);
    if (!match) {
      ref.current.textContent = value;
      return;
    }

    const prefix = match[1];
    const num = parseFloat(match[2]);
    const suffix = match[3];

    const controls = animate(0, num, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate(v) {
        if (ref.current) {
          const display = Number.isInteger(num) ? Math.round(v) : v.toFixed(1);
          ref.current.textContent = `${prefix}${display}${suffix}`;
        }
      },
    });

    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}
