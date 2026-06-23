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

const FEED_ID = process.env.NEXT_PUBLIC_BEHOLD_FEED_ID ?? "";

export default function Reflections() {
  useEffect(() => {
    if (document.querySelector('script[src="https://w.behold.so/widget.js"]')) return;
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://w.behold.so/widget.js";
    document.head.appendChild(script);
  }, []);

  return (
    <section style={{ padding: "clamp(5rem,10vw,8rem) 0", background: "var(--color-bg)" }}>
      <div className="wrap">
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
            Toda semana compartilho um pouco sobre autoconhecimento, maternidade, autocobrança e saúde emocional.
          </p>
        </motion.div>

        {FEED_ID ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <behold-widget feed-id={FEED_ID} />
          </motion.div>
        ) : (
          <div style={{
            textAlign: "center", padding: "3rem",
            background: "rgba(150,120,90,0.06)", borderRadius: 20,
            border: "1px dashed rgba(150,120,90,0.25)",
          }}>
            <p style={{ color: "var(--color-brand-muted)", fontSize: ".9rem" }}>
              Configure <code>NEXT_PUBLIC_BEHOLD_FEED_ID</code> no <code>.env.local</code> para exibir o feed.
            </p>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          style={{ textAlign: "center", marginTop: "2.8rem" }}
        >
          <motion.a
            href="https://instagram.com/psi.jacborges"
            target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}
            className="btn btn-ghost"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} style={{ width: 18, height: 18 }}>
              <rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" />
            </svg>
            Acompanhar no Instagram
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
