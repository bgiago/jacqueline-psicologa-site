"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    num: "01",
    title: "Escuta",
    text: "A gente começa entendendo sua história, seu momento e o que tem ocupado espaço dentro de você.",
    color: "var(--color-purple-pl)",
    accent: "var(--color-purple)",
  },
  {
    num: "02",
    title: "Compreensão",
    text: "Aos poucos, damos nome ao que estava confuso: padrões, emoções e questões que pedem um olhar mais atento.",
    color: "rgba(196,170,223,.22)",
    accent: "var(--color-purple-deep)",
  },
  {
    num: "03",
    title: "Construção",
    text: "Você desenvolve recursos pra lidar com os desafios de um jeito mais saudável — e mais seu.",
    color: "var(--color-sage-pl)",
    accent: "var(--color-sage)",
  },
];

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{ position: "relative" }}
    >
      {/* Connector line */}
      {index < steps.length - 1 && (
        <motion.div
          initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: index * 0.15 + 0.3, ease: "easeOut" }}
          style={{
            position: "absolute", top: "2.2rem", left: "calc(100% + 0.7rem)",
            width: "calc(100% - 1.4rem)", height: 1,
            background: "linear-gradient(90deg, rgba(139,109,196,.3), rgba(107,158,120,.3))",
            transformOrigin: "left", zIndex: 0,
          }}
          className="max-md:hidden"
        />
      )}

      <motion.div
        whileHover={{ y: -5, boxShadow: "0 20px 50px rgba(90,60,150,.14)" }}
        transition={{ type: "spring", stiffness: 280, damping: 22 }}
        style={{
          padding: "2.2rem 1.8rem",
          background: "rgba(255,255,255,0.75)",
          backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)",
          border: "1px solid rgba(255,255,255,0.7)",
          borderRadius: 22,
          boxShadow: "0 8px 30px rgba(90,60,150,.07)",
          position: "relative", zIndex: 1,
          height: "100%",
        }}
      >
        {/* Big background number */}
        <span style={{
          fontFamily: "var(--font-display)", fontSize: "5rem", fontWeight: 600,
          lineHeight: 1, color: step.color,
          position: "absolute", top: "-0.5rem", right: "1.2rem",
          userSelect: "none", pointerEvents: "none",
        }}>
          {step.num}
        </span>

        <div style={{
          width: 44, height: 44, borderRadius: 13, background: step.color,
          display: "flex", alignItems: "center", justifyContent: "center",
          marginBottom: "1.4rem", position: "relative", zIndex: 1,
        }}>
          <svg viewBox="0 0 24 24" fill="none" stroke={step.accent} strokeWidth={1.8} style={{ width: 21, height: 21 }}>
            {index === 0 && <><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></>}
            {index === 1 && <><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></>}
            {index === 2 && <><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M9 12l2 2 4-4"/></>}
          </svg>
        </div>

        <h3 style={{ fontSize: "1.4rem", marginBottom: ".7rem", position: "relative", zIndex: 1 }}>
          {step.title}
        </h3>
        <p style={{ color: "var(--color-brand-muted)", fontSize: "1rem", lineHeight: 1.7, position: "relative", zIndex: 1, margin: 0 }}>
          {step.text}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default function HowItWorks() {
  return (
    <section id="como-funciona" style={{ padding: "clamp(5rem,10vw,8rem) 0", background: "var(--color-surface)", position: "relative", overflow: "hidden" }}>
      <div className="wrap">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: "3.5rem", textAlign: "center" }}
        >
          <span className="eyebrow">O caminho</span>
          <h2 style={{ fontSize: "clamp(2rem,4vw,3.2rem)", marginTop: ".7rem" }}>
            Como funciona o <em>acompanhamento</em>
          </h2>
          <p className="lead" style={{ maxWidth: 52, margin: ".9rem auto 0", fontSize: "1.06rem" }}>
            Não há fórmula. Mas há um processo — respeitoso, no seu tempo.
          </p>
        </motion.div>

        <div className="mob-stack" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.8rem" }}>
          {steps.map((step, i) => (
            <StepCard key={step.num} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
