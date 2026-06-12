"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const paragraphs = [
  "Eu também conheço a cobrança. O medo de errar. A vontade de fazer tudo da melhor forma possível — e o peso que vem junto.",
  "Passei anos como professora e orientadora educacional. Foi nesse contato com pessoas em processo — com suas histórias, dificuldades e potências — que encontrei o meu caminho pra a psicologia clínica. Não foi um desvio. Foi um aprofundamento.",
  "Com pós-graduação em psicologia fenomenológica existencialista pelo IFEN, meu trabalho é caminhar ao seu lado pra você olhar pra sua própria história com mais clareza, acolher o que sente e construir caminhos possíveis pra viver com mais leveza.",
];

const credentials = [
  "Pós-grad. IFEN",
  "Orientadora Educacional",
  "Congressos de Psicologia",
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section id="sobre" ref={ref} style={{ padding: "clamp(5rem,10vw,8rem) 0", overflow: "hidden" }}>
      <div className="wrap mob-stack" style={{ display: "grid", gridTemplateColumns: "1fr 0.8fr", gap: "clamp(2.5rem,6vw,5rem)", alignItems: "center" }}>
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
            <div style={{ display: "flex", flexWrap: "wrap", gap: ".5rem", marginTop: "1rem" }}>
              {credentials.map((c) => (
                <span key={c} style={{
                  fontSize: ".7rem", letterSpacing: ".12em", textTransform: "uppercase",
                  fontFamily: "var(--font-body)", fontWeight: 500,
                  color: "var(--color-purple)", padding: ".28rem .75rem",
                  background: "var(--color-purple-pl)", borderRadius: 999,
                  border: "1px solid rgba(139,109,196,.2)",
                }}>
                  {c}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Photo placeholder (parallax) */}
        <motion.div style={{ y: imageY }}>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ position: "relative" }}
          >
            <div style={{
              aspectRatio: "4/5",
              borderRadius: "40% 60% 50% 50% / 42% 40% 60% 58%",
              overflow: "hidden",
              position: "relative",
              boxShadow: "0 30px 80px rgba(90,60,150,.12)",
            }}>
              <Image
                src="/imagem-jacqueline.webp"
                alt="Jacqueline Borges, Psicóloga Clínica"
                fill
                priority
                style={{ objectFit: "cover", objectPosition: "top center" }}
                sizes="(max-width: 768px) 80vw, 40vw"
              />
            </div>

            {/* Floating quote card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.34, 1.2, 0.64, 1] }}
              className="about-quote-card"
              style={{
                position: "absolute", bottom: "-1.5rem", left: "-1.5rem",
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
              className="about-dots"
              style={{
                position: "absolute", top: "-1rem", right: "-1.2rem",
                width: 80, height: 80,
                backgroundImage: "radial-gradient(circle, rgba(139,109,196,.35) 1.5px, transparent 1.5px)",
                backgroundSize: "10px 10px",
                pointerEvents: "none",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
