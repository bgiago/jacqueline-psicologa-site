interface BorderBeamProps {
  duration?: number;
  borderWidth?: number;
  colorCenter?: string;
  colorTo?: string;
  delay?: number;
}

export function BorderBeam({
  duration = 14,
  borderWidth = 1,
  colorCenter = "rgba(150,120,90,0.75)",
  colorTo = "rgba(87,90,74,0.5)",
  delay = 0,
}: BorderBeamProps) {
  return (
    <div
      className="border-beam-wrap"
      style={{
        "--beam-width": borderWidth,
      } as React.CSSProperties}
    >
      <div
        className="border-beam-beam"
        style={{
          "--beam-duration": duration,
          "--beam-delay": delay,
          "--beam-color": colorCenter,
          "--beam-to": colorTo,
        } as React.CSSProperties}
      />
    </div>
  );
}
