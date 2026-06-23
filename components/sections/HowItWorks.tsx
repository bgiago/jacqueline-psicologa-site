"use client";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { BorderBeam } from "@/components/ui/BorderBeam";

const INTERVAL = 5000;

// ── Illustrations ──────────────────────────────────────────────────────────────

function EscutaIll() {
  return (
    <svg viewBox="0 0 300 240" fill="none" style={{ width: "100%", height: "100%" }}>
      {/* Soft halos */}
      <motion.circle cx="100" cy="120" r="82"
        fill="rgba(150,120,90,0.07)"
        initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.circle cx="200" cy="120" r="68"
        fill="rgba(87,90,74,0.07)"
        initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      />

      {/* Left bubble */}
      <motion.rect x="14" y="66" width="116" height="72" rx="22"
        fill="rgba(255,255,255,0.88)" stroke="rgba(150,120,90,0.22)" strokeWidth="1.5"
        initial={{ x: -24, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.15 }}
      />
      <motion.path d="M38 138 L30 154 L56 146"
        fill="rgba(255,255,255,0.88)" stroke="rgba(150,120,90,0.22)" strokeWidth="1.5"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
      />
      {[0, 1, 2].map((i) => (
        <motion.rect key={i}
          x={30} y={86 + i * 17} width={i === 1 ? 52 : 68} height={4} rx={2}
          fill="rgba(150,120,90,0.22)"
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
          style={{ transformOrigin: "30px center" }}
          transition={{ duration: 0.45, delay: 0.6 + i * 0.1 }}
        />
      ))}

      {/* Waves between bubbles */}
      {[0, 1, 2].map((i) => (
        <motion.path key={i}
          d={`M133 ${96 + i * 16} Q148 ${89 + i * 16} 163 ${96 + i * 16}`}
          stroke="rgba(150,120,90,0.28)" strokeWidth="1.5" fill="none" strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.55, delay: 0.5 + i * 0.1 }}
        />
      ))}

      {/* Right bubble */}
      <motion.rect x="164" y="76" width="106" height="64" rx="20"
        fill="rgba(255,255,255,0.82)" stroke="rgba(87,90,74,0.25)" strokeWidth="1.5"
        initial={{ x: 24, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      />
      <motion.path d="M246 140 L254 154 L230 146"
        fill="rgba(255,255,255,0.82)" stroke="rgba(87,90,74,0.25)" strokeWidth="1.5"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
      />
      {[0, 1].map((i) => (
        <motion.rect key={i}
          x={178} y={94 + i * 17} width={i === 0 ? 60 : 42} height={4} rx={2}
          fill="rgba(87,90,74,0.28)"
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
          style={{ transformOrigin: "178px center" }}
          transition={{ duration: 0.45, delay: 0.7 + i * 0.1 }}
        />
      ))}

      {/* Floating dots */}
      {([
        [68, 46, 4, "rgba(150,120,90,0.3)", 0.8],
        [228, 52, 3, "rgba(87,90,74,0.35)", 0.9],
        [148, 40, 5, "rgba(196,162,130,0.5)", 1.0],
        [282, 105, 3, "rgba(87,90,74,0.22)", 1.1],
        [24, 202, 4, "rgba(150,120,90,0.2)", 1.0],
      ] as const).map(([cx, cy, r, fill, delay], i) => (
        <motion.circle key={i} cx={cx} cy={cy} r={r} fill={fill}
          initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
          transition={{ delay }}
        />
      ))}

      {/* Heart */}
      <motion.path
        d="M149 205 C149 200 144 195 139 195 C129 195 125 205 134 211 L149 224 L164 211 C173 205 169 195 159 195 C154 195 149 200 149 205Z"
        fill="rgba(150,120,90,0.16)" stroke="rgba(150,120,90,0.32)" strokeWidth="1.2"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1.2, 1], opacity: 1 }}
        style={{ transformOrigin: "149px 210px" }}
        transition={{ duration: 0.6, delay: 1.1 }}
      />
    </svg>
  );
}

function CompreensaoIll() {
  const nodes = [
    { x: 150, y: 46, label: "padrões", fill: "rgba(150,120,90,0.1)", stroke: "rgba(150,120,90,0.3)", text: "rgba(70,65,50,0.85)" },
    { x: 258, y: 172, label: "emoções", fill: "rgba(87,90,74,0.1)", stroke: "rgba(87,90,74,0.32)", text: "rgba(60,65,50,0.85)" },
    { x: 44, y: 172, label: "questões", fill: "rgba(196,162,130,0.18)", stroke: "rgba(150,120,90,0.25)", text: "rgba(80,70,50,0.85)" },
  ];
  return (
    <svg viewBox="0 0 300 240" fill="none" style={{ width: "100%", height: "100%" }}>
      {/* Dashed connector lines */}
      {nodes.map((n, i) => (
        <motion.path key={i}
          d={`M150 120 L${n.x} ${n.y}`}
          stroke="rgba(150,120,90,0.14)" strokeWidth="1.5" strokeDasharray="5 5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 + i * 0.15 }}
        />
      ))}

      {/* Outer pulsing ring */}
      <motion.circle cx="150" cy="120" r="52"
        fill="none" stroke="rgba(150,120,90,0.1)" strokeWidth="1"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Center rings */}
      <motion.circle cx="150" cy="120" r="36"
        fill="rgba(150,120,90,0.09)" stroke="rgba(150,120,90,0.2)" strokeWidth="1.5"
        initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      />
      <motion.circle cx="150" cy="120" r="22"
        fill="rgba(150,120,90,0.17)"
        initial={{ scale: 0 }} animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      />
      <motion.circle cx="150" cy="120" r="8"
        fill="rgba(150,120,90,0.6)"
        initial={{ scale: 0 }} animate={{ scale: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      />

      {/* Satellite nodes */}
      {nodes.map((n, i) => (
        <motion.g key={i}
          initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
          style={{ transformOrigin: `${n.x}px ${n.y}px` }}
          transition={{ duration: 0.5, delay: 0.55 + i * 0.15 }}
        >
          <circle cx={n.x} cy={n.y} r="28" fill={n.fill} stroke={n.stroke} strokeWidth="1.5" />
          <text x={n.x} y={n.y + 4}
            textAnchor="middle" fill={n.text}
            fontSize="8.5" fontFamily="var(--font-body)" fontWeight="500"
          >{n.label}</text>
        </motion.g>
      ))}

      {/* Small accent dots */}
      {([[196, 76, 0.9], [104, 76, 1.0], [200, 188, 1.1], [100, 188, 1.2]] as const).map(([cx, cy, delay], i) => (
        <motion.circle key={i} cx={cx} cy={cy} r={3} fill="rgba(150,120,90,0.2)"
          initial={{ scale: 0 }} animate={{ scale: 1 }}
          transition={{ delay }}
        />
      ))}
    </svg>
  );
}

function ConstrucaoIll() {
  const blocks = [
    { x: 48, y: 186, w: 82, h: 30, fill: "rgba(87,90,74,0.1)", stroke: "rgba(87,90,74,0.28)", delay: 0.1 },
    { x: 78, y: 147, w: 82, h: 30, fill: "rgba(87,90,74,0.17)", stroke: "rgba(87,90,74,0.35)", delay: 0.25 },
    { x: 108, y: 108, w: 82, h: 30, fill: "rgba(87,90,74,0.25)", stroke: "rgba(87,90,74,0.42)", delay: 0.4 },
    { x: 138, y: 69, w: 82, h: 30, fill: "rgba(87,90,74,0.35)", stroke: "rgba(87,90,74,0.52)", delay: 0.55 },
  ];
  return (
    <svg viewBox="0 0 300 240" fill="none" style={{ width: "100%", height: "100%" }}>
      <motion.ellipse cx="178" cy="168" rx="108" ry="68"
        fill="rgba(87,90,74,0.05)"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {blocks.map((b, i) => (
        <motion.rect key={i}
          x={b.x} y={b.y} width={b.w} height={b.h} rx={9}
          fill={b.fill} stroke={b.stroke} strokeWidth="1.5"
          initial={{ x: -32, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: b.delay, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      ))}

      {/* Dashed upward path */}
      <motion.path d="M248 200 L248 66"
        stroke="rgba(87,90,74,0.35)" strokeWidth="1.5"
        strokeDasharray="4 5" strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.72 }}
      />
      <motion.path d="M243 73 L248 63 L253 73"
        stroke="rgba(87,90,74,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
        fill="none"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 1.05 }}
      />

      {/* Leaf */}
      <motion.path
        d="M276 44 C273 34 265 29 257 31 C245 34 241 48 253 52 C256 53 259 53 261 51 L276 44Z"
        fill="rgba(87,90,74,0.28)" stroke="rgba(87,90,74,0.5)" strokeWidth="1.2"
        initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        style={{ transformOrigin: "260px 42px" }}
        transition={{ duration: 0.5, delay: 1.05 }}
      />

      {/* Sparkles */}
      {([[38, 56, 0.95], [198, 34, 1.05], [284, 170, 1.15]] as const).map(([x, y, delay], i) => (
        <motion.g key={i}
          initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
          style={{ transformOrigin: `${x}px ${y}px` }}
          transition={{ duration: 0.3, delay }}
        >
          <line x1={x - 5} y1={y} x2={x + 5} y2={y} stroke="rgba(87,90,74,0.42)" strokeWidth="1.5" strokeLinecap="round" />
          <line x1={x} y1={y - 5} x2={x} y2={y + 5} stroke="rgba(87,90,74,0.42)" strokeWidth="1.5" strokeLinecap="round" />
        </motion.g>
      ))}

      {/* Dots on block edges */}
      {([[58, 201], [88, 162], [118, 123], [148, 84]] as const).map(([cx, cy], i) => (
        <motion.circle key={i} cx={cx} cy={cy} r={3}
          fill="rgba(87,90,74,0.5)"
          initial={{ scale: 0 }} animate={{ scale: 1 }}
          transition={{ delay: 0.3 + i * 0.15 }}
        />
      ))}
    </svg>
  );
}

// ── Steps data ─────────────────────────────────────────────────────────────────

const steps = [
  {
    num: "01",
    title: "Escuta",
    text: "A gente começa entendendo sua história, seu momento e o que tem ocupado espaço dentro de você.",
    numColor: "rgba(150,120,90,0.18)",
    accent: "var(--color-purple)",
    illBg: "rgba(250,247,242,0.5)",
    ill: <EscutaIll />,
  },
  {
    num: "02",
    title: "Compreensão",
    text: "Aos poucos, damos nome ao que estava confuso: padrões, emoções e questões que pedem um olhar mais atento.",
    numColor: "rgba(196,162,130,0.22)",
    accent: "var(--color-purple-deep)",
    illBg: "rgba(240,233,220,0.45)",
    ill: <CompreensaoIll />,
  },
  {
    num: "03",
    title: "Construção",
    text: "Você desenvolve recursos pra lidar com os desafios de um jeito mais saudável — e mais seu.",
    numColor: "rgba(87,90,74,0.18)",
    accent: "var(--color-sage)",
    illBg: "rgba(200,220,190,0.4)",
    ill: <ConstrucaoIll />,
  },
] as const;

type StepIndex = 0 | 1 | 2;

// ── Component ──────────────────────────────────────────────────────────────────

export default function HowItWorks() {
  const [step, setStep] = useState<StepIndex>(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    const timer = setInterval(() => setStep((s) => ((s + 1) % steps.length) as StepIndex), INTERVAL);
    return () => clearInterval(timer);
  }, [inView]);

  const current = steps[step];

  return (
    <section id="como-funciona" ref={ref} style={{ padding: "clamp(5rem,10vw,8rem) 0", background: "var(--color-surface)", position: "relative", overflow: "hidden" }}>
      <div className="wrap">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: "3rem", textAlign: "center" }}
        >
          <span className="eyebrow">O caminho</span>
          <h2 style={{ fontSize: "clamp(2rem,4vw,3.2rem)", marginTop: ".7rem" }}>
            Como funciona o <em>acompanhamento</em>
          </h2>
          <p className="lead" style={{ maxWidth: "52ch", margin: ".9rem auto 0", fontSize: "1.06rem", textAlign: "center" }}>
            Não há fórmula. Mas há um processo — respeitoso, no seu tempo.
          </p>
        </motion.div>

        {/* Feature card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            position: "relative",
            borderRadius: 28,
            overflow: "hidden",
            boxShadow: "0 20px 60px rgba(80,70,50,0.1), inset 0 1px 0 rgba(255,255,255,0.9)",
          }}
        >
          <BorderBeam duration={11} colorCenter="rgba(150,120,90,0.6)" colorTo="rgba(87,90,74,0.45)" />

          <div className="mob-stack" style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            background: "linear-gradient(135deg, rgba(255,255,255,0.94) 0%, rgba(250,247,242,0.86) 100%)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.78)",
          }}>

            {/* Left — text */}
            <div style={{ padding: "clamp(1.4rem,2.5vw,2rem) clamp(2rem,4vw,3.2rem) clamp(2rem,4vw,3.2rem)", display: "flex", flexDirection: "column", justifyContent: "space-between", height: 360, overflow: "hidden" }}>
              <AnimatePresence mode="wait">
                <motion.div key={step}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
                  style={{ flex: "none" }}
                >
                  <span style={{
                    fontFamily: "var(--font-display)", fontWeight: 600,
                    fontSize: "clamp(4rem,8vw,6.5rem)", lineHeight: 1,
                    color: current.numColor,
                    display: "block", marginBottom: "0.1rem",
                    userSelect: "none",
                  }}>
                    {current.num}
                  </span>
                  <h3 style={{ fontSize: "clamp(1.5rem,2.8vw,2.1rem)", marginBottom: ".75rem", color: "var(--color-brand)" }}>
                    {current.title}
                  </h3>
                  <p className="lead" style={{ fontSize: "1.02rem", lineHeight: 1.78, color: "var(--color-brand-muted)", margin: 0, maxWidth: "38ch" }}>
                    {current.text}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Step pill nav */}
              <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
                {steps.map((s, i) => (
                  <motion.button
                    key={i}
                    onClick={() => setStep(i as StepIndex)}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    style={{
                      display: "inline-flex", alignItems: "center", gap: ".4rem",
                      padding: ".38rem .85rem",
                      borderRadius: 999, border: "none", cursor: "pointer",
                      background: i === step ? "var(--color-purple)" : "rgba(150,120,90,0.09)",
                      color: i === step ? "#fff" : "var(--color-brand-soft)",
                      fontSize: ".78rem", fontWeight: 600, letterSpacing: ".04em",
                      transition: "background .3s, color .3s",
                    }}
                  >
                    <span style={{
                      fontFamily: "var(--font-display)", fontStyle: "italic",
                      fontSize: ".85rem", opacity: i === step ? 0.75 : 0.6,
                    }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {s.title}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Right — illustration */}
            <motion.div
              animate={{ background: current.illBg }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              style={{
                borderLeft: "1px solid rgba(150,120,90,0.08)",
                padding: "2rem",
                display: "flex", alignItems: "center", justifyContent: "center",
                overflow: "hidden", position: "relative", height: 360,
              }}
            >
              {/* Faint grid dots */}
              <div style={{
                position: "absolute", inset: 0,
                backgroundImage: "radial-gradient(circle, rgba(150,120,90,0.1) 1px, transparent 1px)",
                backgroundSize: "22px 22px",
                pointerEvents: "none",
              }} />

              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                  style={{ width: "100%", maxHeight: 260, position: "relative", zIndex: 1 }}
                >
                  {current.ill}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Progress bar */}
          <motion.div
            key={step}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: INTERVAL / 1000, ease: "linear" }}
            style={{
              position: "absolute", bottom: 0, left: 0,
              height: 2, width: "100%",
              background: "linear-gradient(90deg, var(--color-purple), var(--color-sage))",
              transformOrigin: "left",
              zIndex: 2,
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
