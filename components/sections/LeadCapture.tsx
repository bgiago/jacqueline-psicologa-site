"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LeadCapture() {
  const [sent, setSent] = useState(false);

  return (
    <section style={{ padding: "clamp(4rem,8vw,7rem) 0", background: "var(--color-bg)" }}>
      <div className="wrap">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          style={{
            display: "grid", gridTemplateColumns: "1fr auto", gap: "2.5rem",
            alignItems: "center", background: "rgba(255,255,255,0.75)",
            backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.75)",
            borderRadius: 24, padding: "clamp(2rem,4vw,3rem)",
            boxShadow: "0 16px 50px rgba(90,60,150,.09), 0 1px 0 rgba(255,255,255,.9) inset",
            position: "relative", overflow: "hidden",
          }}
          className="max-md:grid-cols-1"
        >
          {/* Decorative bg */}
          <div style={{ position: "absolute", top: "-30%", right: "5%", width: 280, height: 280, background: "radial-gradient(ellipse, rgba(196,170,223,.2) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />

          <div style={{ position: "relative", zIndex: 1 }}>
            <span className="eyebrow">Sem pressa</span>
            <h2 style={{ fontSize: "clamp(1.6rem,3vw,2.3rem)", margin: ".6rem 0 .8rem" }}>
              Ainda não é a hora de marcar?<br />Tudo bem.
            </h2>
            <p className="lead" style={{ fontSize: "1rem", maxWidth: "46ch" }}>
              De vez em quando envio algo que pode te fazer bem: reflexões sobre autocuidado, maternidade e autocobrança. No seu tempo.
            </p>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            style={{ minWidth: 280, position: "relative", zIndex: 1 }}
            className="max-md:w-full"
          >
            <AnimatePresence mode="wait">
              {!sent ? (
                <motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0, scale: 0.95 }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: ".35rem", marginBottom: ".9rem" }}>
                    <label htmlFor="ln" className="label">Nome</label>
                    <input id="ln" type="text" required placeholder="Seu nome" className="input" />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: ".35rem", marginBottom: ".9rem" }}>
                    <label htmlFor="le" className="label">E-mail</label>
                    <input id="le" type="email" required placeholder="seu@email.com" className="input" />
                  </div>
                  <label style={{ display: "flex", gap: ".6rem", alignItems: "flex-start", fontSize: ".78rem", color: "var(--color-brand-muted)", margin: ".3rem 0 1rem", cursor: "pointer" }}>
                    <input type="checkbox" required style={{ width: 16, height: 16, flexShrink: 0, marginTop: ".2rem", accentColor: "var(--color-purple)" }} />
                    Aceito receber conteúdos por e-mail e concordo com a Política de Privacidade.
                  </label>
                  <motion.button
                    type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                    className="btn btn-primary"
                    style={{ width: "100%", justifyContent: "center" }}
                  >
                    Quero receber
                  </motion.button>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.92, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ ease: [0.34, 1.2, 0.64, 1] }}
                  style={{
                    background: "var(--color-sage-pl)", border: "1px solid var(--color-sage-lt)",
                    color: "#2D5C3A", borderRadius: 14, padding: "1.3rem 1.4rem", fontSize: ".98rem", fontWeight: 500,
                  }}
                >
                  <div style={{ fontSize: "1.4rem", marginBottom: ".4rem" }}>✓</div>
                  Prontinho. Obrigada por confiar.
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
