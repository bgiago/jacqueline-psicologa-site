"use client";
import { motion } from "framer-motion";
import MobileCarousel from "@/components/ui/MobileCarousel";

const services = [
  {
    icon: <><path d="M9.5 2A2.5 2.5 0 007 4.5A2.5 2.5 0 004.5 7a2 2 0 000 4a3 3 0 000 6v.5A2.5 2.5 0 007 20h10a2.5 2.5 0 002.5-2.5V17a3 3 0 000-6a2 2 0 000-4A2.5 2.5 0 0017 4.5A2.5 2.5 0 0014.5 2h-5z"/><line x1="12" y1="2" x2="12" y2="22"/></>,
    title: "Psicoterapia individual",
    text: "Um espaço só seu, pra compreender melhor o que você sente e vive.",
    tag: "Individual",
  },
  {
    icon: <><rect x="2" y="4" width="20" height="14" rx="2" /><path d="M8 21h8M12 18v3" /></>,
    title: "Online",
    text: "Acolhimento de onde você estiver, com o mesmo cuidado do presencial.",
    tag: "Online",
  },
  {
    icon: <><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></>,
    title: "Presencial",
    text: "Para quem prefere o encontro ao vivo — pode ser combinado conforme disponibilidade e proximidade.",
    tag: "Sob consulta",
  },
];

function ServiceCard({ s, i }: { s: typeof services[0]; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -6 }}
      style={{
        padding: "2.2rem 2rem",
        background: "rgba(255,255,255,0.06)",
        backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: 22,
        boxShadow: "0 8px 32px rgba(0,0,0,.25), inset 0 1px 0 rgba(255,255,255,.08)",
        transition: "box-shadow .3s",
        height: "100%",
      }}
    >
      <div style={{
        width: 48, height: 48, borderRadius: 14,
        background: "rgba(107,158,120,.18)", border: "1px solid rgba(107,158,120,.25)",
        display: "flex", alignItems: "center", justifyContent: "center",
        marginBottom: "1.4rem",
      }}>
        <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-sage-lt)" strokeWidth={1.6} style={{ width: 22, height: 22 }}>
          {s.icon}
        </svg>
      </div>
      <div style={{
        display: "inline-block", fontSize: ".65rem", letterSpacing: ".2em",
        textTransform: "uppercase", color: "var(--color-sage-lt)", fontWeight: 600,
        padding: ".2rem .7rem", background: "rgba(107,158,120,.12)",
        borderRadius: 999, marginBottom: "1rem",
      }}>
        {s.tag}
      </div>
      <h3 style={{ fontSize: "1.3rem", color: "#F0E8FC", marginBottom: ".6rem" }}>{s.title}</h3>
      <p style={{ color: "rgba(192,174,223,.75)", fontSize: ".98rem", lineHeight: 1.7, margin: 0 }}>{s.text}</p>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section
      id="servicos"
      style={{
        padding: "clamp(5rem,10vw,8rem) 0",
        background: "linear-gradient(160deg, var(--color-dark) 0%, var(--color-dark-2) 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background aurora blobs */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <motion.div
          animate={{ scale: [1, 1.15, 1], x: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute", top: "-20%", right: "-10%",
            width: "50%", height: "50%",
            background: "radial-gradient(ellipse, rgba(139,109,196,.18) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], y: [0, 20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          style={{
            position: "absolute", bottom: "-15%", left: "-5%",
            width: "35%", height: "40%",
            background: "radial-gradient(ellipse, rgba(107,158,120,.14) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />
      </div>

      <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: "3.5rem", textAlign: "center" }}
        >
          <span className="eyebrow" style={{ color: "var(--color-sage-lt)" }}>Atendimento</span>
          <h2 style={{ fontSize: "clamp(2rem,4vw,3.2rem)", marginTop: ".7rem", color: "#F0E8FC" }}>
            Formas de <em>atendimento</em>
          </h2>
          <p style={{ color: "rgba(192,174,223,.7)", maxWidth: "50ch", margin: ".9rem auto 0", fontSize: "1.04rem" }}>
            Cada encontro é inteiramente seu — de onde você estiver.
          </p>
        </motion.div>

        {/* Desktop grid */}
        <div className="desk-only" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.4rem" }}>
          {services.map((s, i) => <ServiceCard key={s.title} s={s} i={i} />)}
        </div>
      </div>

      {/* Mobile carousel */}
      <div className="mob-only" style={{ marginTop: "0.5rem" }}>
        <MobileCarousel>
          {services.map((s, i) => <ServiceCard key={s.title} s={s} i={i} />)}
        </MobileCarousel>
      </div>

      <div className="wrap" style={{ position: "relative", zIndex: 1 }}>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          style={{ textAlign: "center", margin: "2rem auto 0", color: "rgba(192,174,223,.5)", fontSize: ".88rem", letterSpacing: ".04em" }}
        >
          Atendimento para adolescentes, adultos e idosos.
        </motion.p>
      </div>
    </section>
  );
}
