"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ProjectVisualProps {
  id: string;
  image: string;
  imageAlt: string;
}

export default function ProjectVisual({ id, image, imageAlt }: ProjectVisualProps) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [-12, 12]);
  const scale = useTransform(scrollYProgress, [0, .5, 1], reduced ? [1, 1, 1] : [1.025, 1, 1.025]);

  if (id === "ai-call-center") {
    return (
      <figure ref={ref} className="project-visual ontology-visual" aria-label={imageAlt}>
        <div className="ontology-grid" aria-hidden="true" />
        <motion.div className="ontology-system" style={{ y }}>
          <span className="ontology-kicker">EV CHARGING SUPPORT ONTOLOGY</span>
          <div className="ontology-core">Context</div>
          <div className="ontology-node node-member"><b>Member</b><span>identity · access</span></div>
          <div className="ontology-node node-asset"><b>Asset</b><span>charger · station</span></div>
          <div className="ontology-node node-session"><b>Session</b><span>charge · status</span></div>
          <div className="ontology-node node-payment"><b>Payment</b><span>method · event</span></div>
          <div className="ontology-orbit orbit-one" />
          <div className="ontology-orbit orbit-two" />
        </motion.div>
        <figcaption>Public abstraction · internal entities and decision rules omitted</figcaption>
      </figure>
    );
  }

  if (id === "commerce") {
    return (
      <figure ref={ref} className="project-visual commerce-visual" aria-label={imageAlt}>
        <motion.div className="commerce-system" style={{ y }}>
          <div className="commerce-flow">
            <span>Shopify</span><i>→</i><span>Carrier</span><i>→</i><span>IOSS</span><i>→</i><span>6+ markets</span>
          </div>
          <div className="commerce-chart" aria-hidden="true">
            <div className="commerce-axis"><span>2024</span><span>2025</span></div>
            <div className="commerce-bars"><div className="bar-before" /><div className="bar-after"><b>3×</b></div></div>
          </div>
          <div className="commerce-callout"><strong>+582%</strong><span>Sales outside the UK</span></div>
        </motion.div>
        <figcaption>Normalized public view · customer, order, address, and pricing data omitted</figcaption>
      </figure>
    );
  }

  return (
    <figure ref={ref} className="project-visual">
      <motion.div className="project-image-motion" style={{ y, scale }}>
        <Image src={image} alt={imageAlt} fill sizes="(min-width: 900px) 52vw, 94vw" className="contain-image" />
      </motion.div>
      <figcaption className="evidence-caption">{imageAlt}</figcaption>
    </figure>
  );
}
