"use client";
import { motion } from "framer-motion";

const posts = [
  {
    tag: "Autocobrança",
    text: "A autocrítica pode estar te machucando mais do que te ajudando.",
    gradient: "linear-gradient(135deg, #EAE0FA 0%, #D8EEE0 100%)",
    accent: "var(--color-purple)",
  },
  {
    tag: "Maternidade",
    text: "Ser uma boa mãe não é nunca falhar. É permanecer, apesar do medo.",
    gradient: "linear-gradient(135deg, #D8EEE0 0%, #EAE0FA 100%)",
    accent: "var(--color-sage)",
  },
  {
    tag: "Autoconhecimento",
    text: "O que você viveu te trouxe até aqui.",
    gradient: "linear-gradient(135deg, #F0E8FC 0%, #DFF0E5 100%)",
    accent: "var(--color-purple-deep)",
  },
];

export default function Reflections() {
  return (
    <section style={{ padding: "clamp(5rem,10vw,8rem) 0", background: "var(--color-bg)" }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: "3.5rem", textAlign: "center" }}
        >
          <span className="eyebrow">@psi.jacborges</span>
          <h2 style={{ fontSize: "clamp(2rem,4vw,3.2rem)", marginTop: ".7rem" }}>
            Reflexões que talvez façam<br />sentido pra <em>você</em>
          </h2>
          <p className="lead" style={{ maxWidth: "52ch", margin: ".9rem auto 0", fontSize: "1.04rem" }}>
            Toda semana compartilho um pouco sobre autoconhecimento, maternidade, autocobrança e saúde emocional.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.4rem" }} className="max-md:grid-cols-1">
          {posts.map((post, i) => (
            <motion.div
              key={post.tag}
              initial={{ opacity: 0, y: 28, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              style={{
                borderRadius: 20,
                overflow: "hidden",
                background: "rgba(255,255,255,0.8)",
                backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.7)",
                boxShadow: "0 8px 30px rgba(90,60,150,.07)",
                cursor: "pointer",
              }}
            >
              {/* Image placeholder */}
              <div style={{
                aspectRatio: "4/3",
                background: post.gradient,
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                gap: ".8rem", padding: "1.5rem",
                position: "relative", overflow: "hidden",
              }}>
                {/* Instagram icon watermark */}
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  style={{ opacity: .4 }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke={post.accent} strokeWidth={1.3} style={{ width: 46, height: 46 }}>
                    <rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" />
                  </svg>
                </motion.div>
                <span style={{ fontSize: ".76rem", color: "var(--color-brand-muted)", fontWeight: 500 }}>
                  Post Instagram
                </span>

                {/* Decorative circles */}
                <div style={{ position: "absolute", top: -20, right: -20, width: 100, height: 100, borderRadius: "50%", background: "rgba(255,255,255,.25)" }} />
                <div style={{ position: "absolute", bottom: -14, left: -14, width: 70, height: 70, borderRadius: "50%", background: "rgba(255,255,255,.18)" }} />
              </div>

              {/* Content */}
              <div style={{ padding: "1.3rem 1.4rem 1.6rem" }}>
                <span style={{
                  fontSize: ".64rem", letterSpacing: ".2em", textTransform: "uppercase",
                  color: post.accent, fontWeight: 700,
                  padding: ".25rem .7rem", background: `${post.accent}18`,
                  borderRadius: 999, display: "inline-block", marginBottom: ".8rem",
                }}>
                  {post.tag}
                </span>
                <p style={{
                  fontFamily: "var(--font-display)", fontStyle: "italic",
                  fontSize: "1.1rem", color: "var(--color-brand)",
                  lineHeight: 1.45, margin: 0,
                }}>
                  "{post.text}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          style={{ textAlign: "center", marginTop: "2.8rem" }}
        >
          <motion.a
            href="https://instagram.com/psi.jacborges" target="_blank" rel="noopener noreferrer"
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
