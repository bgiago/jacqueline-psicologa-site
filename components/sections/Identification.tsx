"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { BorderBeam } from "@/components/ui/BorderBeam";

const tensions = [
  "O cansaço que não passa nem no fim de semana.",
  "A culpa que aparece quando você para pra pensar em si.",
  "A sensação de que, por mais que você faça, nunca é suficiente.",
];

function RotatingTension({ items, visible }: { items: string[]; visible: boolean }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!visible) return;
    const timer = setInterval(() => setIndex((i) => (i + 1) % items.length), 5000);
    return () => clearInterval(timer);
  }, [visible, items.length]);

  return (
    <div style={{ marginBottom: "1.8rem" }}>
      <div style={{
        position: "relative",
        minHeight: "5rem",
        display: "flex",
        alignItems: "center",
        padding: "1.3rem 1.2rem",
        background: "linear-gradient(135deg, rgba(255,255,255,0.72) 0%, rgba(247,243,253,0.58) 100%)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderRadius: 20,
        marginBottom: ".9rem",
        overflow: "hidden",
        boxShadow: "0 4px 24px rgba(139,109,196,.07), inset 0 1px 0 rgba(255,255,255,.9)",
      }}>
        <BorderBeam
          size={140}
          duration={10}
          borderWidth={1}
          borderRadius={20}
          colorFrom="rgba(139,109,196,0)"
          colorCenter="rgba(139,109,196,0.7)"
          colorTo="rgba(107,158,120,0.5)"
        />
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ fontSize: "clamp(0.82rem, 1.45vw, 1rem)", color: "var(--color-brand-muted)", margin: 0, lineHeight: 1.7, fontWeight: 400, whiteSpace: "nowrap" }}
          >
            {items[index]}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Dot indicators */}
      <div style={{ display: "flex", gap: ".45rem" }}>
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Ver item ${i + 1}`}
            style={{
              width: i === index ? 22 : 7, height: 7,
              borderRadius: 999, border: "none", padding: 0, cursor: "pointer",
              background: i === index ? "var(--color-purple)" : "rgba(139,109,196,.22)",
              transition: "width .3s ease, background .3s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function Identification() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="aurora-bg" style={{ padding: "clamp(5rem,10vw,8rem) 0" }}>
      <div className="wrap">
        <div
          className="mob-stack"
          style={{
            display: "grid",
            gridTemplateColumns: "0.85fr 1fr",
            gap: "clamp(2.5rem,6vw,5rem)",
            alignItems: "center",
          }}
        >
          {/* Imagem — lado esquerdo */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div style={{
              position: "relative",
              aspectRatio: "4/5",
              borderRadius: "42% 58% 50% 50% / 40% 42% 58% 60%",
              overflow: "hidden",
              background: "linear-gradient(145deg, var(--color-purple-pl) 0%, var(--color-sage-pl) 100%)",
              border: "1.5px dashed rgba(139,109,196,.30)",
              boxShadow: "0 28px 70px rgba(90,60,150,.11)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: ".9rem",
              padding: "2rem",
              textAlign: "center",
            }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3}
                style={{ width: 44, height: 44, color: "var(--color-purple)", opacity: .45 }}>
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="M21 15l-5-5L5 21" />
              </svg>
              <span style={{ fontSize: ".8rem", lineHeight: 1.6, color: "var(--color-brand-muted)" }}>
                <strong style={{ display: "block", fontWeight: 600, color: "var(--color-brand)", fontSize: ".88rem" }}>
                  Foto
                </strong>
                <em style={{ fontSize: ".74rem", opacity: .8 }}>placeholder para imagem</em>
              </span>

              {/* Decorative circles */}
              <div style={{ position: "absolute", top: -24, right: -24, width: 110, height: 110, borderRadius: "50%", background: "rgba(255,255,255,.3)", pointerEvents: "none" }} />
              <div style={{ position: "absolute", bottom: -16, left: -16, width: 80, height: 80, borderRadius: "50%", background: "rgba(107,158,120,.15)", pointerEvents: "none" }} />
            </div>

            {/* Dot grid decoration */}
            <motion.div
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              style={{
                position: "absolute",
                bottom: "10%", left: "-1.4rem",
                width: 80, height: 80,
                backgroundImage: "radial-gradient(circle, rgba(139,109,196,.35) 1.5px, transparent 1.5px)",
                backgroundSize: "10px 10px",
                pointerEvents: "none",
              }}
            />
          </motion.div>

          {/* Texto — lado direito, alinhado à esquerda */}
          <div style={{ textAlign: "left" }}>
            <motion.span
              className="eyebrow"
              initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Talvez você sinta isso
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.18, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ fontSize: "clamp(1.9rem,3.5vw,3rem)", margin: ".8rem 0 1.6rem" }}
            >
              Quando você cuida de todo mundo,{" "}
              <em>quem cuida de você?</em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="lead"
              style={{ fontSize: "1.06rem", marginBottom: "1rem" }}
            >
              Você continua de pé. Resolvendo, trabalhando, sustentando. Por fora, parece tudo sob controle.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.36 }}
              className="lead"
              style={{ fontSize: "1.06rem", marginBottom: "1.8rem" }}
            >
              Mas por dentro, alguma coisa começa a pedir atenção.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.46 }}
            >
              <RotatingTension items={tensions} visible={inView} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }} animate={inView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.78 }}
              className="divider"
              style={{ transformOrigin: "left" }}
            />

            <motion.p
              initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.88 }}
              style={{
                fontFamily: "var(--font-display)", fontStyle: "italic",
                fontSize: "clamp(1.2rem,2.2vw,1.5rem)", color: "var(--color-brand)",
                lineHeight: 1.35, marginTop: "1.4rem",
              }}
            >
              Aos poucos, você foi deixando de existir além do que carrega.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
