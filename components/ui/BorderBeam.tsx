interface BorderBeamProps {
  size?: number;
  duration?: number;
  borderWidth?: number;
  anchor?: number;
  colorCenter?: string;
  colorFrom?: string;
  colorTo?: string;
  delay?: number;
  borderRadius?: number;
}

export function BorderBeam({
  size = 160,
  duration = 14,
  borderWidth = 1,
  anchor = 90,
  colorCenter = "rgba(139,109,196,0.85)",
  colorFrom = "rgba(139,109,196,0)",
  colorTo = "rgba(107,158,120,0.55)",
  delay = 0,
  borderRadius = 20,
}: BorderBeamProps) {
  return (
    <div
      className="border-beam-wrap"
      style={{
        "--beam-width": borderWidth,
        "--beam-radius": borderRadius,
      } as React.CSSProperties}
    >
      <div
        className="border-beam-beam"
        style={{
          "--beam-size": size,
          "--beam-duration": duration,
          "--beam-delay": delay,
          "--beam-anchor": anchor,
          "--beam-from": colorFrom,
          "--beam-color": colorCenter,
          "--beam-to": colorTo,
        } as React.CSSProperties}
      />
    </div>
  );
}
