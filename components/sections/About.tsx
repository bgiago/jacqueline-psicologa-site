"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const paragraphs = [
  "Eu também conheço a cobrança. O medo de errar. A vontade de fazer tudo da melhor forma possível — e o peso que vem junto.",
  "Talvez seja por isso que eu acredite tanto em processos humanos. Sem perfeição, sem fórmula, sem julgamento.",
  "Como psicóloga clínica com abordagem fenomenológica existencialista, meu trabalho é caminhar ao seu lado pra você olhar pra sua própria história com mais clareza, acolher o que sente e construir caminhos possíveis pra viver com mais leveza.",
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section id="sobre" ref={ref} style={{ padding: "clamp(5rem,10vw,8rem) 0", overflow: "hidden" }}>
      <div className="wrap max-md:grid-cols-1" style={{ display: "grid", gridTemplateColumns: "0.8fr 1fr", gap: "clamp(2.5rem,6vw,5rem)", alignItems: "center" }}>
        {/* Photo placeholder (parallax) */}
        <motion.div style={{ y: imageY }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ position: "relative" }}
          >
            <div style={{
              aspectRatio: "4/5",
              borderRadius: "40% 60% 50% 50% / 42% 40% 60% 58%",
              overflow: "hidden",
              background: "linear-gradient(135deg, var(--color-purple-pl) 0%, var(--color-sage-pl) 100%)",
              border: "1.5px dashed rgba(139,109,196,.35)",
              display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column",
              gap: ".8rem", color: "var(--color-brand-muted)", padding: "2rem", textAlign: "center",
              boxShadow: "0 30px 80px rgba(90,60,150,.12)",
            }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} style={{ width: 44, height: 44, opacity: .5, color: "var(--color-purple)" }}>
                <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" />
              </svg>
              <span style={{ fontSize: ".82rem", lineHeight: 1.6 }}>
                <strong style={{ display: "block", fontWeight: 600, color: "var(--color-brand)", fontSize: ".88rem" }}>Foto da Jacqueline</strong>
                <em style={{ fontSize: ".74rem", opacity: .8 }}>mais pessoal e próxima</em>
              </span>
            </div>

            {/* Floating quote card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.34, 1.2, 0.64, 1] }}
              style={{
                position: "absolute", bottom: "-1.5rem", right: "-1.5rem",
                padding: "1.2rem 1.5rem", maxWidth: 220,
                background: "rgba(255,255,255,0.9)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,.8)", borderRadius: 18,
                boxShadow: "0 16px 40px rgba(90,60,150,.12)",
              }}
            >
              <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "1rem", color: "var(--color-brand)", margin: 0, lineHeight: 1.4 }}>
                "Ninguém precisa guardar tudo sozinho."
              </p>
            </motion.div>

            {/* Decorative dot cluster */}
            <motion.div
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              viewport={{ once: true }} transition={{ delay: 0.7 }}
              style={{
                position: "absolute", top: "-1rem", left: "-1.2rem",
                width: 80, height: 80,
                backgroundImage: "radial-gradient(circle, rgba(139,109,196,.35) 1.5px, transparent 1.5px)",
                backgroundSize: "10px 10px",
                pointerEvents: "none",
              }}
            />
          </motion.div>
        </motion.div>

        {/* Text */}
        <div>
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            Sobre
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{ fontSize: "clamp(2rem,3.8vw,3rem)", margin: ".7rem 0 1.8rem" }}
          >
            Oi, eu sou a <em>Jacqueline.</em>
          </motion.h2>

          {paragraphs.map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.18 + i * 0.1 }}
              className="lead"
              style={{ marginBottom: "1.3rem", fontSize: "1.04rem" }}
            >
              {text}
            </motion.p>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="divider" />
            <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "1.25rem", color: "var(--color-brand)", margin: "1.4rem 0 .4rem", lineHeight: 1.3 }}>
              Jacqueline Borges
            </p>
            <small style={{ fontFamily: "var(--font-body)", fontStyle: "normal", fontSize: ".72rem", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--color-brand-soft)" }}>
              Psicóloga Clínica · CRP 05/85378
            </small>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
