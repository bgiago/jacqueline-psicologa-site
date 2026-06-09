"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { useInView } from "framer-motion";

const faqs = [
  { q: "Terapia é só pra quem está em crise?", a: "Não. A terapia também é um espaço pra se conhecer, refletir e cuidar de você antes que o peso aperte." },
  { q: "Como funciona o primeiro contato?", a: "Você me chama no WhatsApp e a gente conversa rápido pra entender o seu momento e ver o melhor caminho pra começar." },
  { q: "É online ou presencial?", a: "A preferência é pelo online — funciona muito bem e você atende de onde estiver. O presencial pode ser combinado dependendo da proximidade." },
  { q: "Preciso saber explicar o que estou sentindo pra marcar?", a: "Não precisa chegar com tudo organizado. Pode chegar do jeito que você está — a gente organiza junto." },
  { q: "Nunca fiz terapia. Tem problema?", a: "Nenhum. A primeira conversa serve justamente pra isso: começar sem pressão." },
  { q: "Quanto tempo dura cada sessão?", a: "Cada sessão tem duração de 50 minutos, com frequência semanal." },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(index === 0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      style={{ borderBottom: "1px solid var(--color-line)" }}
    >
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        style={{
          width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center",
          gap: "1.2rem", padding: "1.4rem 0", cursor: "pointer",
          background: "none", border: "none", textAlign: "left",
        }}
      >
        <span style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.1rem,2vw,1.25rem)", fontWeight: 500, color: "var(--color-brand)", lineHeight: 1.3 }}>
          {q}
        </span>

        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          style={{
            flexShrink: 0, width: 28, height: 28, borderRadius: 8,
            background: open ? "var(--color-purple)" : "var(--color-purple-pl)",
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "background .25s",
          }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke={open ? "#fff" : "var(--color-purple)"} strokeWidth={2.2} style={{ width: 14, height: 14 }}>
            <path d="M12 5v14M5 12h14" />
          </svg>
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ overflow: "hidden" }}
          >
            <p style={{ color: "var(--color-brand-muted)", fontSize: "1rem", lineHeight: 1.75, padding: "0 0 1.4rem", margin: 0 }}>
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="duvidas" style={{ padding: "clamp(5rem,10vw,8rem) 0", background: "var(--color-surface)" }}>
      <div className="wrap">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: "3.5rem", textAlign: "center" }}
        >
          <span className="eyebrow">Dúvidas</span>
          <h2 style={{ fontSize: "clamp(2rem,4vw,3.2rem)", marginTop: ".7rem" }}>
            Antes de começar, <em>algumas dúvidas</em> comuns
          </h2>
        </motion.div>

        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
