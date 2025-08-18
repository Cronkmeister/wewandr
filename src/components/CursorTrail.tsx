"use client";

import { useEffect, useState } from "react";

interface CursorTrailProps {
  enabled?: boolean;
}

export default function CursorTrail({ enabled = true }: CursorTrailProps) {
  const [trails, setTrails] = useState<
    Array<{ x: number; y: number; id: number }>
  >([]);
  const [trailId, setTrailId] = useState(0);

  useEffect(() => {
    if (!enabled) return;

    const handleMouseMove = (e: MouseEvent) => {
      const newTrail = {
        x: e.clientX,
        y: e.clientY,
        id: trailId,
      };

      setTrails((prev) => [...prev.slice(-5), newTrail]); // Keep only last 5 trails
      setTrailId((prev) => prev + 1);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [enabled, trailId]);

  if (!enabled) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {trails.map((trail, index) => (
        <div
          key={trail.id}
          className="absolute w-2 h-2 bg-orange-400 rounded-full opacity-60 animate-pulse"
          style={{
            left: trail.x - 4,
            top: trail.y - 4,
            transform: `scale(${1 - index * 0.2})`,
            opacity: 0.6 - index * 0.1,
          }}
        />
      ))}
    </div>
  );
}
