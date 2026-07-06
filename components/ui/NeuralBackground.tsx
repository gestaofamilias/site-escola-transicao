type NeuralBackgroundProps = {
  className?: string;
  light?: boolean;
};

const nodes = [
  { cx: 60, cy: 80, r: 4 },
  { cx: 180, cy: 40, r: 3 },
  { cx: 300, cy: 110, r: 5 },
  { cx: 420, cy: 60, r: 3 },
  { cx: 540, cy: 130, r: 4 },
  { cx: 150, cy: 220, r: 3 },
  { cx: 320, cy: 260, r: 4 },
  { cx: 460, cy: 210, r: 3 },
  { cx: 620, cy: 90, r: 4 },
];

const links: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [1, 5],
  [2, 6],
  [3, 7],
  [4, 8],
  [5, 6],
  [6, 7],
];

export function NeuralBackground({ className = "", light = false }: NeuralBackgroundProps) {
  const stroke = light ? "rgba(255,255,255,0.35)" : "rgba(24,99,242,0.3)";
  const dot = light ? "rgba(255,255,255,0.75)" : "#1863f2";

  return (
    <svg
      viewBox="0 0 680 300"
      fill="none"
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
    >
      {links.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].cx}
          y1={nodes[a].cy}
          x2={nodes[b].cx}
          y2={nodes[b].cy}
          stroke={stroke}
          strokeWidth={1.4}
          strokeDasharray="2 8"
          className="animate-dash"
        />
      ))}
      {nodes.map((n, i) => (
        <circle
          key={i}
          cx={n.cx}
          cy={n.cy}
          r={n.r}
          fill={dot}
          className="animate-pulse-soft"
          style={{ animationDelay: `${i * 0.3}s` }}
        />
      ))}
    </svg>
  );
}
