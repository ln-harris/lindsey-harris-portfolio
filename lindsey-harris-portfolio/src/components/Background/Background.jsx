import { useMemo } from "react";
import "./Background.css";
export default function Background() {
  const particles = useMemo(
    () =>
      Array.from({ length: 50 }, (_, id) => ({
        id,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 20,
        duration: Math.random() * 20 + 10,
        opacity: Math.random() * 0.5 + 0.2,
        dx: Math.random() * 100 - 50,
        dy: Math.random() * 100 - 50,
      })),
    [],
  );
  return (
    <>
      <div className="particles-container" id="particles" aria-hidden="true">
        {particles.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
              top: `${p.y}%`,
              background: `rgba(99, 102, 241, ${p.opacity})`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              "--dx": `${p.dx}px`,
              "--dy": `${p.dy}px`,
            }}
          />
        ))}
      </div>
      {[1, 2, 3].map((n) => (
        <div
          key={n}
          className={`gradient-orb gradient-orb-${n}`}
          aria-hidden="true"
        />
      ))}
    </>
  );
}
