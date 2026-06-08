"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WA_DEFAULT } from "@/lib/constants";

const contactInfo = [
  {
    icon: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>,
    label: "jacborgespsi@gmail.com",
    href: "mailto:jacborgespsi@gmail.com",
  },
  {
    icon: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" /></>,
    label: "@psi.jacborges",
    href: "https://instagram.com/psi.jacborges",
  },
  {
    icon: <><path d="M12 21s-7-5.2-7-11a7 7 0 0114 0c0 5.8-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" /></>,
    label: "Araruama, RJ",
    href: null,
  },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contato" style={{ padding: "clamp(5rem,10vw,8rem) 0", background: "var(--color-surface)", position: "relative", overflow: "hidden" }}>
      {/* Background orb */}
      <div style={{ position: "absolute", bottom: "-20%", right: "-10%", width: "40%", height: "50%", background: "radial-gradient(ellipse, rgba(107,158,120,.12) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />

      <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: "3.5rem", textAlign: "center" }}
        >
          <span className="eyebrow">Contato</span>
          <h2 style={{ fontSize: "clamp(2rem,4vw,3.2rem)", marginTop: ".7rem" }}>
            Vamos <em>conversar?</em>
          </h2>
          <p className="lead" style={{ maxWidth: "46ch", margin: ".9rem auto 0", fontSize: "1.04rem" }}>
            Me conta um pouco sobre o que te trouxe até aqui. Eu te respondo pessoalmente.
          </p>
        </motion.div>

        <div className="mob-stack" style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "clamp(2rem,5vw,3.5rem)", alignItems: "start" }}>
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            style={{
              background: "rgba(255,255,255,0.8)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,0.75)", borderRadius: 22,
              padding: "clamp(1.8rem,4vw,2.8rem)",
              boxShadow: "0 12px 40px rgba(90,60,150,.08)",
            }}
          >
            <AnimatePresence mode="wait">
              {!sent ? (
                <motion.form
                  key="form"
                  onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                  initial={{ opacity: 1 }} exit={{ opacity: 0, y: -8 }}
                >
                  <div style={{ display: "flex", gap: "1rem", marginBottom: 0 }} className="max-sm:flex-col">
                    <div style={{ display: "flex", flexDirection: "column", gap: ".35rem", marginBottom: ".9rem", flex: 1 }}>
                      <label htmlFor="cn" className="label">Nome</label>
                      <input id="cn" type="text" required placeholder="Seu nome" className="input" />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: ".35rem", marginBottom: ".9rem", flex: 1 }}>
                      <label htmlFor="cw" className="label">WhatsApp</label>
                      <input id="cw" type="tel" required placeholder="(22) 90000-0000" className="input" />
                    </div>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: ".35rem", marginBottom: ".9rem" }}>
                    <label htmlFor="ce" className="label">E-mail</label>
                    <input id="ce" type="email" required placeholder="seu@email.com" className="input" />
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: ".35rem", marginBottom: ".9rem" }}>
                    <label htmlFor="cm" className="label">
                      O que você gostaria de conversar?{" "}
                      <span style={{ color: "var(--color-brand-soft)", fontWeight: 400, textTransform: "none", letterSpacing: 0 }}>(opcional)</span>
                    </label>
                    <textarea id="cm" placeholder="Pode escrever do jeito que você está se sentindo." className="input" />
                  </div>

                  <label style={{ display: "flex", gap: ".6rem", alignItems: "flex-start", fontSize: ".78rem", color: "var(--color-brand-muted)", margin: ".3rem 0 1.2rem", cursor: "pointer" }}>
                    <input type="checkbox" required style={{ width: 16, height: 16, flexShrink: 0, marginTop: ".2rem", accentColor: "var(--color-purple)" }} />
                    Autorizo o contato e concordo com a Política de Privacidade.
                  </label>

                  <motion.button
                    type="submit" whileHover={{ scale: 1.02, y: -1 }} whileTap={{ scale: 0.97 }}
                    className="btn btn-primary"
                  >
                    Enviar mensagem
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.92, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ ease: [0.34, 1.2, 0.64, 1] }}
                  style={{ padding: "2rem 0" }}
                >
                  <div style={{
                    width: 52, height: 52, borderRadius: "50%", background: "var(--color-sage-pl)",
                    display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.2rem",
                  }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-sage)" strokeWidth={2.2} style={{ width: 24, height: 24 }}>
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <h3 style={{ fontSize: "1.4rem", marginBottom: ".5rem" }}>Recebi.</h3>
                  <p style={{ color: "var(--color-brand-muted)", fontSize: "1rem" }}>
                    Te respondo em breve, com calma.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Aside */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.12 }}
            style={{ display: "flex", flexDirection: "column", gap: "1.8rem" }}
          >
            {/* WhatsApp CTA */}
            <div style={{
              background: "linear-gradient(135deg, var(--color-dark) 0%, var(--color-dark-2) 100%)",
              borderRadius: 20, padding: "1.8rem 1.8rem 2rem",
              boxShadow: "0 12px 40px rgba(30,21,48,.18)",
              position: "relative", overflow: "hidden",
            }}>
              <div style={{ position: "absolute", top: "-20%", right: "-15%", width: 120, height: 120, background: "radial-gradient(ellipse, rgba(139,109,196,.25) 0%, transparent 70%)", borderRadius: "50%" }} />
              <h3 style={{ fontSize: "1.25rem", color: "#F0E8FC", marginBottom: ".6rem", position: "relative" }}>
                Prefere falar agora?
              </h3>
              <p style={{ color: "rgba(192,174,223,.7)", fontSize: ".95rem", lineHeight: 1.6, position: "relative" }}>
                Me chama direto no WhatsApp — a primeira conversa é tranquila.
              </p>
              <motion.a
                href={WA_DEFAULT} target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}
                className="btn"
                style={{
                  marginTop: "1.3rem", background: "#25D366", color: "#fff",
                  boxShadow: "0 8px 24px rgba(37,211,102,.30)",
                  gap: ".65rem", position: "relative", display: "inline-flex",
                }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 18, height: 18 }}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.554 4.112 1.524 5.84L.057 23.213a1 1 0 001.256 1.257l5.374-1.467A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.65-.521-5.15-1.427l-.37-.22-3.828 1.044 1.044-3.826-.23-.382A9.943 9.943 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
                (22) 99265-9191
              </motion.a>
            </div>

            {/* Contact info */}
            <div style={{
              background: "rgba(255,255,255,0.75)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)",
              border: "1px solid rgba(255,255,255,0.7)", borderRadius: 20,
              padding: "1.6rem 1.8rem",
              boxShadow: "0 8px 28px rgba(90,60,150,.07)",
            }}>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1rem" }}>
                {contactInfo.map((item) => (
                  <li key={item.label} style={{ display: "flex", gap: ".85rem", alignItems: "center", fontSize: ".95rem" }}>
                    <div style={{ width: 36, height: 36, borderRadius: 10, background: "var(--color-purple-pl)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-purple)" strokeWidth={1.6} style={{ width: 17, height: 17 }}>
                        {item.icon}
                      </svg>
                    </div>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-brand-muted)", transition: "color .2s" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-purple)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-brand-muted)")}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <span style={{ color: "var(--color-brand-muted)" }}>{item.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
