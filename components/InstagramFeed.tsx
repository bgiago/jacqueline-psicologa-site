"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "behold-widget": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        "feed-id": string;
      };
    }
  }
}

const FEED_ID = "SlfJGliHwJrCvNUEiGzP";

export default function InstagramFeed() {
  useEffect(() => {
    if (document.querySelector('script[src="https://w.behold.so/widget.js"]')) return;
    const s = document.createElement("script");
    s.type = "module";
    s.src = "https://w.behold.so/widget.js";
    document.head.appendChild(s);
  }, []);

  return (
    <section
      id="reflexoes"
      style={{
        padding: "clamp(5rem,10vw,8rem) 0",
        background: "var(--color-bg)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Orb decorativo */}
      <div style={{
        position: "absolute", top: "-15%", left: "-5%",
        width: "40%", height: "45%",
        background: "radial-gradient(ellipse, rgba(139,109,196,.10) 0%, transparent 65%)",
        borderRadius: "50%", pointerEvents: "none",
      }} />

      <div className="wrap" style={{ position: "relative", zIndex: 1 }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: "3rem", textAlign: "center" }}
        >
          <span className="eyebrow">@psi.jacborges</span>
          <h2 style={{ fontSize: "clamp(2rem,4vw,3.2rem)", marginTop: ".7rem" }}>
            Reflexões que talvez façam<br />sentido pra <em>você</em>
          </h2>
          <p className="lead" style={{ maxWidth: "52ch", margin: ".9rem auto 0", fontSize: "1.04rem" }}>
            Toda semana compartilho sobre autoconhecimento, maternidade e saúde emocional.
          </p>
        </motion.div>

        {/* Widget container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          style={{
            borderRadius: 24,
            overflow: "hidden",
            background: "rgba(255,255,255,0.55)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            border: "1px solid rgba(139,109,196,0.14)",
            boxShadow: "0 8px 40px rgba(90,60,150,.08)",
            padding: "clamp(1.2rem, 3vw, 2rem)",
          }}
        >
          <behold-widget feed-id={FEED_ID} />
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          style={{ textAlign: "center", marginTop: "2.5rem" }}
        >
          <motion.a
            href="https://instagram.com/psi.jacborges"
            target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}
            className="btn btn-ghost"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} style={{ width: 18, height: 18 }}>
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" />
            </svg>
            Acompanhar no Instagram
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
