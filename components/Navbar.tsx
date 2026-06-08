"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WA_DEFAULT } from "@/lib/constants";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#servicos", label: "Atendimento" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: scrolled ? 0.6 : 1 }}
      transition={{
        y: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
        opacity: { duration: 0.35, ease: "easeOut" },
      }}
      style={{
        position: "fixed",
        top: "1rem",
        left: "1rem",
        right: "1rem",
        zIndex: 50,
        borderRadius: open ? "14px 14px 0 0" : 14,
        background: "rgba(247,243,253,0.9)",
        backdropFilter: scrolled ? "blur(8px)" : "blur(18px) saturate(1.4)",
        WebkitBackdropFilter: scrolled ? "blur(8px)" : "blur(18px) saturate(1.4)",
        border: "1px solid rgba(255,255,255,0.72)",
        boxShadow: scrolled
          ? "0 2px 12px rgba(90,60,150,.06)"
          : "0 4px 28px rgba(90,60,150,.10)",
        padding: "0.7rem 0",
        transition:
          "border-radius .3s ease, backdrop-filter .35s ease, box-shadow .35s ease",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 clamp(1rem, 2.5vw, 1.8rem)" }}>
        <a href="#" style={{ fontFamily: "var(--font-display)", fontSize: "1.35rem", fontWeight: 600, letterSpacing: ".02em", color: "var(--color-brand)" }}>
          Jacqueline <span style={{ color: "var(--color-purple)", fontStyle: "italic" }}>Borges</span>
        </a>

        <nav className="desk-only" style={{ display: "flex", alignItems: "center", gap: "2.2rem" }}>
          {links.map(({ href, label }) => (
            <NavLink key={href} href={href} label={label} />
          ))}
          <motion.a
            href={WA_DEFAULT} target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.97 }}
            className="btn btn-primary"
            style={{ padding: ".7rem 1.45rem", fontSize: ".85rem" }}
          >
            Agendar conversa
          </motion.a>
        </nav>

        <button
          aria-label="Menu" onClick={() => setOpen(!open)}
          className="mob-flex"
          style={{ flexDirection: "column", gap: "5px", padding: "8px", background: "none", border: "none", cursor: "pointer" }}
        >
          <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 7 : 0 }} style={{ display: "block", width: 22, height: 2, background: "var(--color-brand)", borderRadius: 2 }} />
          <motion.span animate={{ opacity: open ? 0 : 1 }} style={{ display: "block", width: 22, height: 2, background: "var(--color-brand)", borderRadius: 2 }} />
          <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -7 : 0 }} style={{ display: "block", width: 22, height: 2, background: "var(--color-brand)", borderRadius: 2 }} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{
              overflow: "hidden",
              background: "rgba(247,243,253,.96)",
              backdropFilter: "blur(18px)", WebkitBackdropFilter: "blur(18px)",
              borderTop: "1px solid rgba(139,109,196,.1)",
              borderRadius: "0 0 14px 14px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", padding: "0.5rem clamp(1rem, 2.5vw, 1.8rem) 1rem" }}>
              {links.map(({ href, label }, i) => (
                <motion.a key={href} href={href}
                  initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => setOpen(false)}
                  style={{ padding: ".9rem 0", fontSize: "1rem", fontWeight: 500, color: "var(--color-brand-muted)", borderBottom: "1px solid var(--color-line)" }}
                >
                  {label}
                </motion.a>
              ))}
              <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginTop: "1rem", justifyContent: "center" }}>
                Agendar conversa
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ fontFamily: "var(--font-body)", fontSize: ".88rem", fontWeight: 500, color: "var(--color-brand-muted)", letterSpacing: ".01em", position: "relative", padding: ".2rem 0" }}
    >
      {label}
      <motion.span
        animate={{ width: hovered ? "100%" : "0%" }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        style={{ position: "absolute", bottom: 0, left: 0, height: "1px", background: "var(--color-purple)", display: "block" }}
      />
    </a>
  );
}
