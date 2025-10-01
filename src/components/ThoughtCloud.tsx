import Image from "next/image";
import ThoughtBubble from "./ThoughtBubble";
import { useEffect, useMemo, useRef, useState } from "react";

type Bubble = { text: string; delay?: number };

const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5)); // ~2.39996

// tiny deterministic jitter so layout is stable across renders
function hashStr(s: string) {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}
function rand01(seed: number) {
  // xorshift
  let x = (seed || 1) >>> 0;
  x ^= x << 13;
  x ^= x >>> 17;
  x ^= x << 5;
  return ((x >>> 0) % 1000) / 1000;
}

export default function ThoughtCloud() {
  const bubbles: Bubble[] = useMemo(
    () => [
      { text: "How are we getting to the airport?", delay: 200 },
      { text: "Can I bring my stroller to the gate?", delay: 400 },
      { text: "Should I bring our carseat or rent one?", delay: 600 },
      { text: "Why can&apos;t I get any info from the airline?", delay: 800 },
      { text: "How many items can I check on the flight?", delay: 1000 },
      {
        text: "How are we going to get through customs with all our stuff?",
        delay: 1200,
      },
      { text: "Can I put him in the carrier on the flight?", delay: 1400 },
      { text: "Is there anywhere to change him on the flight?", delay: 1600 },
      { text: "Am I allowed to bring formula through security?", delay: 1800 },
      { text: "Is our destination safe for kids?", delay: 2000 },
      { text: "Do we need any immunizations?", delay: 2200 },
      {
        text: "What&apos;s the cultural view on breastfeeding in public?",
        delay: 2400,
      },
      { text: "Are there any laundromats near by?", delay: 2600 },
      { text: "Can we drink the water?", delay: 2800 },
      { text: "Digital currency app or cash?", delay: 3000 },
      { text: "Are streets stroller-friendly?", delay: 3200 },
      { text: "Should we bring the travel potty?", delay: 3400 },
      { text: "Should we bring the stroller fan?", delay: 3600 },
      {
        text: "Is there anywhere to buy diapers, wipes and formula near by?",
        delay: 3800,
      },
      { text: "Are there any parks for kids to run free?", delay: 4000 },
      { text: "Is there a dishwasher?", delay: 4200 },
      { text: "Do they have a pack and play?", delay: 4400 },
      { text: "Do they provide high chairs?", delay: 4600 },
      { text: "How are we going to adjust nap times?", delay: 4800 },
    ],
    []
  );

  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 800, h: 500 });

  // Observe container size for responsiveness
  useEffect(() => {
    if (!containerRef.current) return;
    const ro = new ResizeObserver((entries) => {
      for (const e of entries) {
        const cr = e.contentRect;
        setSize({ w: cr.width, h: cr.height });
      }
    });
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  // Compute positions around an ellipse with light jitter + simple repulsion pass
  const positions = useMemo(() => {
    const { w, h } = size;

    // image size & ellipse radii
    const imgW = Math.min(600, w * 0.75);
    const imgH = imgW * 0.66;
    const cx = w / 2 - 80; // Move center slightly left
    const cy = h / 2;

    // radii for the ellipse the bubbles follow (just outside image)
    const rx = imgW * 0.65;
    const ry = imgH * 0.7;

    // create initial polar positions spaced by golden angle
    const base = bubbles.map((b, i) => {
      const angle = i * GOLDEN_ANGLE;
      // alternate two rings so lines don't collide
      const ring = i % 2 === 0 ? 1.0 : 1.12;
      const seed = hashStr(b.text);
      const jitterR = (rand01(seed) - 0.5) * 18; // px
      const jitterA = (rand01(seed + 1) - 0.5) * 0.18; // radians

      const rxi = rx * ring + jitterR;
      const ryi = ry * ring + jitterR * 0.6;
      const a = angle + jitterA;

      const x = cx + rxi * Math.cos(a);
      const y = cy + ryi * Math.sin(a);
      return { x, y };
    });

    // quick repulsion to reduce overlaps (doesn&apos;t need to be perfect)
    const pts = base.map((p) => ({ ...p }));
    const R = 120; // desired min distance between centers (tweak)
    const ITER = 24; // small number keeps it snappy
    for (let k = 0; k < ITER; k++) {
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[j].x - pts[i].x;
          const dy = pts[j].y - pts[i].y;
          const d2 = dx * dx + dy * dy;
          const d = Math.sqrt(d2) || 0.0001;
          if (d < R) {
            const push = (R - d) * 0.12; // 0.12 softness keeps some overlap
            const ux = dx / d;
            const uy = dy / d;
            pts[i].x -= ux * push;
            pts[i].y -= uy * push;
            pts[j].x += ux * push;
            pts[j].y += uy * push;
          }
        }
      }
      // clamp to container
      for (const p of pts) {
        p.x = Math.max(40, Math.min(w - 40, p.x));
        p.y = Math.max(40, Math.min(h - 40, p.y));
      }
    }

    // convert to top/left for absolutely positioned bubbles
    return pts.map((p) => ({
      left: p.x,
      top: p.y,
      transform: "translate(-50%, -50%)",
    }));
  }, [bubbles, size]);

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div
        ref={containerRef}
        className="relative w-[min(1000px,95vw)] h-[min(700px,85vh)]"
      >
        {/* Main Image */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
          <Image
            src="/assets/imgs/booking.jpg"
            alt="Booking illustration"
            width={Math.min(600, size.w * 0.75)}
            height={Math.min(600, size.w * 0.75) * 0.66}
            className="rounded-3xl shadow-2xl scale-105 object-cover"
            style={{
              clipPath: "ellipse(45% 45% at 52% 50%)",
            }}
            priority
          />
        </div>

        {/* Bubbles */}
        {bubbles.map((b, i) => (
          <ThoughtBubble
            key={b.text}
            text={b.text}
            delay={b.delay}
            style={positions[i]}
            // optional: tweak individual size spacing with className
            className=""
          />
        ))}
      </div>
    </div>
  );
}
