"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import MobileCarousel from "@/components/ui/MobileCarousel";

const posts = [
  {
    tag: "Autocobrança",
    text: "A autocrítica pode estar te machucando mais do que te ajudando.",
    gradient: "linear-gradient(135deg, #EAE0FA 0%, #D8EEE0 100%)",
    accent: "var(--color-purple)",
    accentBg: "rgba(139,109,196,0.12)",
    iconStroke: "#8B6DC4",
  },
  {
    tag: "Maternidade",
    text: "Ser uma boa mãe não é nunca falhar. É permanecer, apesar do medo.",
    gradient: "linear-gradient(135deg, #D8EEE0 0%, #EAE0FA 100%)",
    accent: "var(--color-sage)",
    accentBg: "rgba(107,158,120,0.12)",
    iconStroke: "#6B9E78",
  },
  {
    tag: "Autoconhecimento",
    text: "O que você viveu te trouxe até aqui.",
    gradient: "linear-gradient(135deg, #F0E8FC 0%, #DFF0E5 100%)",
    accent: "var(--color-purple)",
    accentBg: "rgba(139,109,196,0.12)",
    iconStroke: "#9B7ED4",
  },
];

function PostCard({ post, i }: { post: typeof posts[0]; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay: i * 0.1 }}
      style={{
        borderRadius: 20, overflow: "hidden",
        background: "rgba(255,255,255,0.8)",
        backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.7)",
        boxShadow: "0 8px 30px rgba(90,60,150,.07)",
        cursor: "pointer",
      }}
    >
      <div style={{
        aspectRatio: "4/3", background: post.gradient,
        display: "flex", alignItems: "center", justifyContent: "center",
        position: "relative", overflow: "hidden", padding: "1.5rem",
      }}>
        <svg viewBox="0 0 24 24" fill="none" stroke={post.iconStroke} strokeWidth={1.3} style={{ width: 46, height: 46, opacity: .45 }}>
          <rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" />
        </svg>
        <div style={{ position: "absolute", top: -20, right: -20, width: 100, height: 100, borderRadius: "50%", background: "rgba(255,255,255,.25)" }} />
        <div style={{ position: "absolute", bottom: -14, left: -14, width: 70, height: 70, borderRadius: "50%", background: "rgba(255,255,255,.18)" }} />
      </div>
      <div style={{ padding: "1.3rem 1.4rem 1.6rem" }}>
        <span style={{
          fontSize: ".64rem", letterSpacing: ".2em", textTransform: "uppercase",
          color: post.accent, fontWeight: 700, padding: ".25rem .7rem",
          background: post.accentBg, borderRadius: 999,
          display: "inline-block", marginBottom: ".8rem",
        }}>{post.tag}</span>
        <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "1.1rem", color: "var(--color-brand)", lineHeight: 1.45, margin: 0 }}>
          "{post.text}"
        </p>
      </div>
    </motion.div>
  );
}

function GalleryCard({ post, isActive, onEnter, onLeave }: {
  post: typeof posts[0];
  isActive: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  return (
    <article
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{
        flex: isActive ? "2.5 1 0%" : "1 1 0%",
        transition: "flex 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        position: "relative", borderRadius: 22,
        overflow: "hidden", cursor: "pointer", minWidth: 0,
      }}
    >
      {/* Gradient bg */}
      <motion.div
        animate={{ scale: isActive ? 1.06 : 1 }}
        transition={{ type: "spring", stiffness: 240, damping: 28 }}
        style={{ position: "absolute", inset: 0, background: post.gradient, zIndex: 0 }}
      >
        <div style={{ position: "absolute", top: "-20%", right: "-15%", width: "65%", height: "65%", borderRadius: "50%", background: "rgba(255,255,255,.22)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-15%", left: "-10%", width: "50%", height: "50%", borderRadius: "50%", background: "rgba(255,255,255,.18)", pointerEvents: "none" }} />
      </motion.div>

      {/* Center icon */}
      <motion.div
        animate={{ opacity: isActive ? 0.18 : 0.45, scale: isActive ? 0.7 : 1, y: isActive ? -25 : 0 }}
        transition={{ type: "spring", stiffness: 240, damping: 28 }}
        style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 1, pointerEvents: "none" }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke={post.iconStroke} strokeWidth={1.3} style={{ width: 54, height: 54 }}>
          <rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" />
        </svg>
      </motion.div>

      {/* Tag pill — visible when collapsed */}
      <motion.div
        animate={{ opacity: isActive ? 0 : 1, y: isActive ? 10 : 0 }}
        transition={{ duration: 0.22 }}
        style={{ position: "absolute", bottom: "1.4rem", left: "50%", transform: "translateX(-50%)", zIndex: 2, whiteSpace: "nowrap", pointerEvents: "none" }}
      >
        <span style={{
          fontSize: ".63rem", letterSpacing: ".18em", textTransform: "uppercase",
          color: post.accent, fontWeight: 700, padding: ".3rem .9rem",
          background: "rgba(255,255,255,0.88)",
          backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
          borderRadius: 999, display: "inline-block",
          boxShadow: "0 2px 10px rgba(0,0,0,.06)",
        }}>
          {post.tag}
        </span>
      </motion.div>

      {/* Reveal overlay — slides up on hover */}
      <motion.div
        animate={{ y: isActive ? 0 : "105%", opacity: isActive ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 280, damping: 30 }}
        style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          padding: "1.8rem 1.8rem 2rem",
          background: "rgba(247,243,253,0.94)",
          backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
          borderTop: "1px solid rgba(255,255,255,0.95)",
          zIndex: 3,
        }}
      >
        <span style={{
          fontSize: ".63rem", letterSpacing: ".2em", textTransform: "uppercase",
          color: post.accent, fontWeight: 700, padding: ".25rem .75rem",
          background: post.accentBg, borderRadius: 999,
          display: "inline-block", marginBottom: "1rem",
        }}>
          {post.tag}
        </span>
        <p style={{
          fontFamily: "var(--font-display)", fontStyle: "italic",
          fontSize: "clamp(1rem, 1.3vw, 1.32rem)",
          color: "var(--color-brand)", lineHeight: 1.45,
          margin: "0 0 1.2rem",
        }}>
          "{post.text}"
        </p>
        <span style={{ fontSize: ".78rem", color: "var(--color-brand-muted)", display: "flex", alignItems: "center", gap: ".45rem" }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} style={{ width: 14, height: 14 }}>
            <rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" />
          </svg>
          @psi.jacborges
        </span>
      </motion.div>
    </article>
  );
}

export default function Reflections() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section style={{ padding: "clamp(5rem,10vw,8rem) 0", background: "var(--color-bg)" }}>
      <div className="wrap">
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

        {/* Desktop accordion gallery */}
        <div className="desk-only" style={{ display: "flex", gap: "1rem", height: 460 }}>
          {posts.map((post, i) => (
            <GalleryCard
              key={post.tag}
              post={post}
              isActive={activeIndex === i}
              onEnter={() => setActiveIndex(i)}
              onLeave={() => setActiveIndex(null)}
            />
          ))}
        </div>
      </div>

      {/* Mobile carousel */}
      <div className="mob-only" style={{ marginTop: "0.5rem" }}>
        <MobileCarousel>
          {posts.map((post, i) => <PostCard key={post.tag} post={post} i={i} />)}
        </MobileCarousel>
      </div>

      <div className="wrap">
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
