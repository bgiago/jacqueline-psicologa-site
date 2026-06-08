"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode[];
}

export default function MobileCarousel({ children }: Props) {
  const [active, setActive] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const el = trackRef.current;
    if (!el || !el.children[0]) return;
    const itemW = (el.children[0] as HTMLElement).offsetWidth + 12;
    const idx = Math.round(el.scrollLeft / itemW);
    setActive(Math.max(0, Math.min(idx, children.length - 1)));
  };

  const goTo = (i: number) => {
    const el = trackRef.current;
    if (!el || !el.children[0]) return;
    const itemW = (el.children[0] as HTMLElement).offsetWidth + 12;
    el.scrollTo({ left: i * itemW, behavior: "smooth" });
    setActive(i);
  };

  return (
    <div>
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="scrollbar-hide"
        style={{
          display: "flex",
          overflowX: "scroll",
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          gap: "0.75rem",
          paddingLeft: "clamp(1.2rem, 4vw, 2.5rem)",
          paddingRight: "clamp(1.2rem, 4vw, 2.5rem)",
          paddingBottom: "0.25rem",
        }}
      >
        {children.map((child, i) => (
          <div
            key={i}
            style={{
              flexShrink: 0,
              width: "80vw",
              maxWidth: 340,
              scrollSnapAlign: "start",
            }}
          >
            {child}
          </div>
        ))}
      </div>

      {children.length > 1 && (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 6, marginTop: "1.2rem" }}>
          {children.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => goTo(i)}
              animate={{
                width: i === active ? 24 : 8,
                background: i === active ? "var(--color-purple)" : "rgba(139,109,196,.28)",
              }}
              transition={{ duration: 0.25 }}
              style={{ height: 8, borderRadius: 999, border: "none", cursor: "pointer", padding: 0, outline: "none" }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
