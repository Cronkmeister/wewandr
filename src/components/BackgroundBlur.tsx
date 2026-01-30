"use client";

const BLUR_VARIANTS = {
  full: {
    background:
      "radial-gradient(circle at 70% 25%, rgba(249, 115, 22, 0.28) 0%, rgba(249, 115, 22, 0.12) 25%, rgba(251, 146, 60, 0.02) 45%, transparent 60%)",
    blurPx: 80,
  },
  orb: {
    background:
      "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(249, 115, 22, 0.25) 0%, rgba(249, 115, 22, 0.12) 35%, rgba(251, 146, 60, 0.04) 55%, transparent 75%)",
    blurPx: 100,
  },
  "orb-soft": {
    background:
      "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(249, 115, 22, 0.22) 0%, rgba(249, 115, 22, 0.3) 30%, rgba(251, 146, 60, 0.03) 55%, transparent 75%)",
    blurPx: 90,
  },
} as const;

export type BackgroundBlurVariant = keyof typeof BLUR_VARIANTS;

interface BackgroundBlurProps {
  className?: string;
  variant?: BackgroundBlurVariant;
  blurPx?: number;
}

export default function BackgroundBlur({
  className = "absolute inset-0 z-0",
  variant = "full",
  blurPx,
}: BackgroundBlurProps) {
  const { background, blurPx: defaultBlur } = BLUR_VARIANTS[variant];
  const blur = blurPx ?? defaultBlur;

  return (
    <div
      className={`pointer-events-none absolute z-0 ${className}`}
      style={{
        background,
        filter: `blur(${blur}px)`,
      }}
    />
  );
}
