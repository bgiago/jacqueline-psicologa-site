"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { WA_COURAGE } from "@/lib/constants";

export default function Courage() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgX = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      ref={ref}
      style={{
        padding: "clamp(5rem,10vw,9rem) 0",
        background: "var(--color-surface)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated gradient bg */}
      <motion.div
        style={{ x: bgX, position: "absolute", inset: "-20%", pointerEvents: "none" }}
        aria-hidden
      >
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 70% 60% at 40% 50%, rgba(139,109,196,.14) 0%, transparent 70%)",
        }} />
      </motion.div>

      <div className="wrap" style={{ position: "relative", zIndex: 1, maxWidth: 780 }}>
        <motion.span
          className="eyebrow"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ display: "block", textAlign: "center", marginBottom: "1.2rem" }}
        >
          Coragem
        </motion.span>

        <motion.blockquote
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.2rem,5vw,4rem)",
            lineHeight: 1.1,
            fontWeight: 500,
            color: "var(--color-brand)",
            textAlign: "center",
            margin: "0 auto 1.8rem",
            maxWidth: "18ch",
          }}
        >
          Coragem nem sempre tem cara de{" "}
          <em>coragem.</em>
        </motion.blockquote>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lead"
          style={{ textAlign: "center", margin: "0 auto 1.2rem", fontSize: "1.08rem", maxWidth: "52ch" }}
        >
          Às vezes ela aparece quando você pede ajuda. Quando admite, em voz alta, que está cansada. Quando decide olhar pra si com a mesma gentileza que você oferece a todo mundo.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          style={{
            fontFamily: "var(--font-display)", fontStyle: "italic",
            fontSize: "clamp(1.25rem,2.2vw,1.55rem)",
            color: "var(--color-brand)", textAlign: "center",
            margin: "1.6rem auto 2.4rem", maxWidth: "42ch", lineHeight: 1.4,
          }}
        >
          Procurar terapia não tira de você a força que te trouxe até aqui. Só divide o peso.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35, ease: [0.34, 1.2, 0.64, 1] }}
          style={{ textAlign: "center" }}
        >
          <motion.a
            href={WA_COURAGE} target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.97 }}
            className="btn btn-primary"
            style={{ fontSize: "1rem", padding: "1.1rem 2.2rem" }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 19, height: 19 }}>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.554 4.112 1.524 5.84L.057 23.213a1 1 0 001.256 1.257l5.374-1.467A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.65-.521-5.15-1.427l-.37-.22-3.828 1.044 1.044-3.826-.23-.382A9.943 9.943 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
            Quero dar esse passo
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
