"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { WA_MIRROR } from "@/lib/constants";

const cards = [
  {
    icon: <><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 10h8M8 14h5" /></>,
    text: "Você sente que precisa dar conta de tudo — sozinha.",
  },
  {
    icon: <><path d="M12 2l2.5 6.5L21 9l-5 4 1.5 7L12 16l-5.5 4L8 13 3 9l6.5-.5z" /></>,
    text: "Você se cobra mais do que cobraria qualquer outra pessoa.",
  },
  {
    icon: <><path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.6l-1-1a5.5 5.5 0 00-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 000-7.8z" /></>,
    text: "Sente culpa quando para pra pensar em si mesma.",
  },
  {
    icon: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    text: "Está exausta, mas não consegue desacelerar.",
  },
  {
    icon: <><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 4-6 8-6s8 2 8 6" /></>,
    text: "Perdeu de vista quem você é além dos seus papéis.",
  },
  {
    icon: <><path d="M21 11.5a8.4 8.4 0 01-9 8.4 8.5 8.5 0 01-3.9-.9L3 20.5l1.5-5.1A8.4 8.4 0 0112 3a8.5 8.5 0 019 8.5z" /></>,
    text: "Carrega muita coisa em silêncio.",
  },
];

function Card({ icon, text, index }: { icon: React.ReactNode; text: string; index: number }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -6, scale: 1.02 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        padding: "2rem 1.8rem",
        background: hovered
          ? "linear-gradient(135deg, rgba(255,255,255,0.92), rgba(234,224,250,0.75))"
          : "rgba(255,255,255,0.75)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        border: hovered ? "1px solid rgba(139,109,196,.3)" : "1px solid rgba(255,255,255,0.7)",
        borderRadius: 20,
        boxShadow: hovered ? "0 20px 50px rgba(90,60,150,.16)" : "0 8px 30px rgba(90,60,150,.08)",
        cursor: "default",
        transition: "background .3s, border .3s, box-shadow .3s",
      }}
    >
      <motion.div
        className="ic" style={{ marginBottom: "1.2rem" }}
        animate={hovered ? { rotate: [0, -5, 5, 0], scale: 1.1 } : { rotate: 0, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>{icon}</svg>
      </motion.div>
      <p style={{ fontSize: "1rem", color: "var(--color-brand-muted)", lineHeight: 1.65, maxWidth: "none", margin: 0 }}>{text}</p>
    </motion.div>
  );
}

export default function MirrorCards() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section style={{ padding: "clamp(5rem,10vw,8rem) 0", background: "var(--color-surface)", position: "relative", overflow: "hidden" }}>
      {/* Background blob */}
      <div style={{
        position: "absolute", top: "-20%", right: "-10%",
        width: "60%", height: "60%",
        background: "radial-gradient(ellipse, rgba(196,170,223,.18) 0%, transparent 70%)",
        borderRadius: "50%", pointerEvents: "none",
      }} />

      <div className="wrap">
        <div ref={headerRef} style={{ marginBottom: "3.5rem", textAlign: "center" }}>
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 10 }} animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Espelho
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{ fontSize: "clamp(2rem,4vw,3.2rem)", marginTop: ".7rem" }}
          >
            Talvez você reconheça um pouco de <em>você</em> aqui.
          </motion.h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.4rem" }} className="max-md:grid-cols-2 max-sm:grid-cols-1">
          {cards.map((card, i) => (
            <Card key={i} icon={card.icon} text={card.text} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          style={{ marginTop: "3rem", textAlign: "center" }}
        >
          <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "clamp(1.35rem,2.4vw,1.7rem)", color: "var(--color-brand)", marginBottom: "1.6rem", lineHeight: 1.35 }}>
            Se você se reconheceu, conversar pode ser um bom primeiro passo.
          </p>
          <motion.a
            href={WA_MIRROR} target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
            className="btn btn-primary"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 18, height: 18 }}>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.554 4.112 1.524 5.84L.057 23.213a1 1 0 001.256 1.257l5.374-1.467A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.65-.521-5.15-1.427l-.37-.22-3.828 1.044 1.044-3.826-.23-.382A9.943 9.943 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
            Conversar agora
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
