"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";

interface Props {
  children: React.ReactNode[];
}

export default function MobileCarousel({ children }: Props) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <Swiper
        slidesPerView={1.2}
        centeredSlides={true}
        spaceBetween={14}
        grabCursor={true}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onSlideChange={(swiper: any) => setActive(swiper.activeIndex)}
      >
        {children.map((child, i) => (
          <SwiperSlide key={i}>{child}</SwiperSlide>
        ))}
      </Swiper>

      {children.length > 1 && (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 6, marginTop: "1.2rem" }}>
          {children.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setActive(i)}
              animate={{
                width: i === active ? 24 : 8,
                background: i === active ? "var(--color-purple)" : "rgba(150,120,90,.28)",
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
