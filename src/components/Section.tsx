import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export default function Section({ children, className = "" }: SectionProps) {
  return (
    <section className={`w-full px-4 py-16 md:py-24 ${className}`}>
      <div className="mx-auto max-w-3xl">{children}</div>
    </section>
  );
}
