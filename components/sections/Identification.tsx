"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const tensions = [
  "O cansaço que não passa nem no fim de semana.",
  "A culpa que aparece quando você para pra pensar em si.",
  "A sensação de que, por mais que você faça, nunca é suficiente.",
];

export default function Identification() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="aurora-bg" style={{ padding: "clamp(5rem,10vw,8rem) 0" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 clamp(1.2rem,4vw,2.5rem)", textAlign: "center" }}>
        <motion.span
          className="eyebrow"
          initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Talvez você sinta isso
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ fontSize: "clamp(1.9rem,3.8vw,3rem)", margin: ".8rem 0 1.8rem" }}
        >
          Quando você cuida de todo mundo,<br />
          <em>quem cuida de você?</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.22 }}
          className="lead"
          style={{ fontSize: "1.12rem", marginBottom: "1.2rem", margin: "0 auto 1.2rem" }}
        >
          Você continua de pé. Resolvendo, trabalhando, sustentando. Por fora, parece tudo sob controle.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.32 }}
          className="lead"
          style={{ fontSize: "1.12rem", marginBottom: "2rem", margin: "0 auto 2rem" }}
        >
          Mas por dentro, alguma coisa começa a pedir atenção.
        </motion.p>

        <ul style={{ listStyle: "none", textAlign: "left", display: "inline-flex", flexDirection: "column", gap: ".9rem", marginBottom: "2rem" }}>
          {tensions.map((item, i) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.42 + i * 0.1 }}
              style={{ display: "flex", gap: ".85rem", alignItems: "flex-start", color: "var(--color-brand-muted)", fontSize: "1.02rem" }}
            >
              <span style={{
                width: 7, height: 7, borderRadius: "50%", background: "var(--color-purple)",
                flexShrink: 0, marginTop: ".6rem",
                boxShadow: "0 0 0 3px rgba(139,109,196,.2)",
              }} />
              {item}
            </motion.li>
          ))}
        </ul>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }} animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="divider"
          style={{ margin: "0 auto 1.6rem" }}
        />

        <motion.p
          initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.85 }}
          style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "clamp(1.3rem,2.5vw,1.6rem)", color: "var(--color-brand)", lineHeight: 1.3 }}
        >
          Aos poucos, você foi deixando de existir além do que carrega.
        </motion.p>
      </div>
    </section>
  );
}
