"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { WA_DEFAULT } from "@/lib/constants";

const headline = ["Você não precisa", "dar conta de", "tudo sozinha."];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      style={{
        minHeight: "100svh",
        background: "var(--gradient-hero)",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        paddingTop: "clamp(5.5rem, 8vw, 8rem)",
        paddingBottom: "clamp(3rem, 5vw, 5rem)",
      }}
    >
      {/* Floating aurora blobs */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], x: [0, 18, 0], y: [0, -14, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute", top: "-8%", right: "-6%",
          width: "55vw", height: "55vw", maxWidth: 700, maxHeight: 700,
          background: "radial-gradient(ellipse, rgba(196,170,223,.35) 0%, transparent 70%)",
          borderRadius: "55% 45% 38% 62% / 48% 55% 45% 52%",
          pointerEvents: "none",
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.12, 1], x: [0, -16, 0], y: [0, 12, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{
          position: "absolute", bottom: "-12%", left: "-4%",
          width: "40vw", height: "40vw", maxWidth: 500, maxHeight: 500,
          background: "radial-gradient(ellipse, rgba(107,158,120,.22) 0%, transparent 70%)",
          borderRadius: "45% 55% 60% 40% / 52% 45% 55% 48%",
          pointerEvents: "none",
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.06, 1], y: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        style={{
          position: "absolute", top: "30%", left: "42%",
          width: "25vw", height: "25vw", maxWidth: 320, maxHeight: 320,
          background: "radial-gradient(ellipse, rgba(139,109,196,.12) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      <div className="wrap hero-grid" style={{ position: "relative", zIndex: 2, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(2rem, 3.5vw, 3.5rem)", alignItems: "center" }}>
        {/* Text side */}
        <motion.div style={{ y: textY, opacity }}>

          {/* Badge + CRP — same row on desktop, column on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="hero-badge-row"
            style={{ display: "flex", alignItems: "center", gap: ".7rem", marginBottom: "2rem" }}
          >
            {/* Location pill */}
            <motion.span
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2, ease: [0.34, 1.2, 0.64, 1] }}
              style={{
                display: "inline-flex", alignItems: "center", gap: ".5rem",
                padding: ".4rem .9rem",
                background: "rgba(255,255,255,0.8)",
                backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.7)", borderRadius: 999,
                boxShadow: "0 4px 18px rgba(90,60,150,.09)",
                fontSize: ".76rem", color: "var(--color-brand-muted)", fontWeight: 500,
                whiteSpace: "nowrap",
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--color-sage)", flexShrink: 0, boxShadow: "0 0 0 3px rgba(107,158,120,.22)" }} />
              Atendimento online · Araruama, RJ
            </motion.span>

            {/* Thin vertical divider — hidden on mobile */}
            <span className="hero-badge-divider" style={{ width: 1, height: 13, background: "rgba(139,109,196,.3)", borderRadius: 1, flexShrink: 0 }} />

            {/* CRP eyebrow */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.28 }}
              className="eyebrow"
            >
              Psicóloga Clínica · CRP 05/85378
            </motion.span>
          </motion.div>

          <h1 style={{ fontSize: "clamp(2.8rem, 4.5vw, 4.5rem)", fontWeight: 500, lineHeight: 1.08, marginBottom: "3rem" }}>
            {headline.map((line, li) => (
              <span key={li} style={{ display: "block", overflow: "hidden" }}>
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.35 + li * 0.14 }}
                  style={{ display: "block" }}
                >
                  {li === headline.length - 1 ? (
                    <><em>{line.replace(".", "")}</em>.</>
                  ) : line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="lead"
            style={{ fontSize: "1.1rem", maxWidth: "48ch", marginBottom: "3.2rem" }}
          >
            Um espaço de escuta genuína, onde você pode ser quem é — sem precisar ser forte o tempo todo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            style={{ display: "flex", gap: "0.9rem", flexWrap: "wrap", alignItems: "center" }}
          >
            <motion.a
              href={WA_DEFAULT} target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
              className="btn btn-primary"
              style={{ gap: ".7rem" }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.554 4.112 1.524 5.84L.057 23.213a1 1 0 001.256 1.257l5.374-1.467A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.65-.521-5.15-1.427l-.37-.22-3.828 1.044 1.044-3.826-.23-.382A9.943 9.943 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
              Quero conversar
            </motion.a>
            <motion.a
              href="#sobre"
              whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}
              className="btn btn-ghost"
            >
              Conhecer meu trabalho
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Image side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ position: "relative", y: imageY }}
        >
          <div className="hero-img-box" style={{
            position: "relative", aspectRatio: "4/5", maxHeight: "80vh",
            borderRadius: "38% 62% 52% 48% / 42% 38% 62% 58%",
            overflow: "hidden",
            boxShadow: "0 32px 80px rgba(90,60,150,.18)",
          }}>
            <Image
              src="/imagem-jacqueline.png"
              alt="Jacqueline Borges, Psicóloga Clínica"
              fill
              priority
              style={{ objectFit: "cover", objectPosition: "top center" }}
              sizes="(max-width: 768px) 90vw, 45vw"
            />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "30%", background: "linear-gradient(to top, rgba(238,230,248,.5), transparent)", pointerEvents: "none" }} />
          </div>

          {/* Decorative ring */}
          <div className="hero-deco-ring" style={{
            position: "absolute", inset: "-16px",
            borderRadius: "40% 60% 54% 46% / 44% 40% 60% 56%",
            border: "1.5px dashed rgba(139,109,196,.20)",
            pointerEvents: "none",
          }} />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: ".4rem" }}
      >
        <span style={{ fontSize: ".65rem", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--color-brand-soft)", fontWeight: 600 }}>Role para baixo</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          style={{ width: 1, height: 32, background: "linear-gradient(to bottom, var(--color-purple), transparent)" }}
        />
      </motion.div>

    </section>
  );
}
