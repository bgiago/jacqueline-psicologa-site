"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { WA_DEFAULT } from "@/lib/constants";

const headline = ["Você não precisa", "dar conta de", "tudo sozinha."];

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Desktop background image */}
      <div className="desk-only" style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image
          src="/desk.webp"
          alt=""
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
          sizes="100vw"
        />
      </div>

      {/* Mobile image — explicit dimensions so it renders inside flex column */}
      <div className="mob-only" style={{ flexShrink: 0, lineHeight: 0 }}>
        <Image
          src="/mob.webp"
          alt="Jacqueline Borges, Psicóloga Clínica"
          width={800}
          height={1000}
          priority
          style={{ width: "100%", height: "60vh", objectFit: "cover", objectPosition: "top center", display: "block" }}
          sizes="(max-width: 768px) 100vw, 1px"
        />
      </div>

      {/* Text content — on mobile: card rises over image bottom */}
      <div className="hero-text-section" style={{ flex: 1 }}>
      <div
        className="wrap hero-content-wrap"
        style={{
          flex: 1,
          paddingBottom: "clamp(2rem, 4vw, 5rem)",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Badge + CRP */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="hero-badge-row hero-badge-wrap"
          style={{ display: "flex", alignItems: "center", gap: ".7rem", marginBottom: "2rem" }}
        >
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
              boxShadow: "0 4px 18px rgba(80,70,50,.09)",
              fontSize: ".76rem", color: "var(--color-brand-muted)", fontWeight: 500,
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--color-sage)", flexShrink: 0, boxShadow: "0 0 0 3px rgba(87,90,74,.22)" }} />
            Online · todo o Brasil · Presencial · Araruama e Rio das Ostras, RJ
          </motion.span>

          <span className="hero-badge-divider" style={{ width: 1, height: 13, background: "rgba(150,120,90,.3)", borderRadius: 1, flexShrink: 0 }} />

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="eyebrow"
          >
            Psicóloga Clínica · CRP 05/85378
          </motion.span>
        </motion.div>

        <h1 className="hero-h1" style={{ fontSize: "clamp(2.8rem, 4.5vw, 4.5rem)", fontWeight: 500, lineHeight: 1.08, marginBottom: "1.2rem" }}>
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
          className="lead hero-lead"
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
      </div>
      </div>

      {/* Scroll indicator — desktop only, absolute won't conflict on mobile */}
      <motion.div
        className="desk-only"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: ".4rem", zIndex: 3 }}
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
