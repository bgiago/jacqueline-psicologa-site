"use client";
import { motion } from "framer-motion";

const links = [
  { href: "https://wa.me/5522992659191", label: "WhatsApp (22) 99265-9191" },
  { href: "mailto:jacborgespsi@gmail.com", label: "jacborgespsi@gmail.com" },
  { href: "https://instagram.com/psi.jacborges", label: "@psi.jacborges", target: "_blank" },
];

const info = [
  "Jacqueline Borges",
  "Psicóloga Clínica · CRP 05/85378",
  "Araruama, RJ",
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--gradient-dark)", color: "rgba(192,174,223,.75)", padding: "clamp(3.5rem,7vw,5.5rem) 0 2.5rem", position: "relative", overflow: "hidden" }}>
      {/* Subtle aurora */}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 50% at 80% 20%, rgba(139,109,196,.08) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
        <div className="mob-stack" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: "2.5rem", alignItems: "start" }}>
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 600, letterSpacing: ".02em", color: "var(--color-bg)", marginBottom: ".9rem" }}>
              Jacqueline{" "}
              <span style={{ color: "var(--color-purple-lt)", fontStyle: "italic" }}>Borges</span>
            </div>
            <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "1.15rem", color: "#C4B0E2", maxWidth: "26ch", lineHeight: 1.45, margin: 0 }}>
              Um espaço de escuta acolhedora, ética e comprometida com o seu processo.
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: ".68rem", letterSpacing: ".22em", textTransform: "uppercase", color: "var(--color-purple-lt)", marginBottom: "1.1rem", fontWeight: 600 }}>
              Contato
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: ".75rem", fontSize: ".9rem" }}>
              {links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} target={l.target ?? "_self"} rel="noopener noreferrer" className="footer-link">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: ".68rem", letterSpacing: ".22em", textTransform: "uppercase", color: "var(--color-purple-lt)", marginBottom: "1.1rem", fontWeight: 600 }}>
              Informações
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: ".75rem", fontSize: ".9rem" }}>
              {info.map((i) => (
                <li key={i} style={{ opacity: .75 }}>{i}</li>
              ))}
              <li>
                <a href="#" className="footer-link">Política de Privacidade</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom" style={{ borderTop: "1px solid rgba(255,255,255,.08)", marginTop: "2.8rem", paddingTop: "1.5rem", fontSize: ".78rem", color: "rgba(192,174,223,.4)", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: ".6rem" }}>
          <span>© {new Date().getFullYear()} Jacqueline Borges. Todos os direitos reservados.</span>
          <span>Atendimento para adolescentes, adultos e idosos.</span>
        </div>
      </div>
    </footer>
  );
}
