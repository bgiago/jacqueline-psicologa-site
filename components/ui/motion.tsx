"use client";
import { motion, useInView, Variants } from "framer-motion";
import { useRef, ReactNode } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay } }),
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({ opacity: 1, transition: { duration: 0.6, ease: "easeOut", delay } }),
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (delay = 0) => ({ opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.34, 1.2, 0.64, 1], delay } }),
};

export function FadeUp({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} custom={delay} variants={fadeUp} className={className}>
      {children}
    </motion.div>
  );
}

export function FadeIn({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} custom={delay} variants={fadeIn} className={className}>
      {children}
    </motion.div>
  );
}

export function ScaleIn({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} custom={delay} variants={scaleIn} className={className}>
      {children}
    </motion.div>
  );
}

export function StaggerGroup({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className={className}>
      {children}
    </motion.div>
  );
}

export const StaggerItem = motion.div;
export const staggerItemVariants = fadeUp;

export { motion, useInView };
export type { Variants };
