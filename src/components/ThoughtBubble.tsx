interface ThoughtBubbleProps {
  text: string;
  className?: string;
  delay?: number;
  style?: React.CSSProperties;
}

export default function ThoughtBubble({
  text,
  className = "",
  delay = 0,
  style = {},
}: ThoughtBubbleProps) {
  return (
    <div
      className={`absolute animate-bounce-in ${className}`}
      style={{
        animationDelay: `${delay}ms`,
        animationFillMode: "both",
        ...style,
      }}
    >
      <div className="bg-white rounded-3xl px-4 py-3 shadow-lg border border-orange-500 w-[240px]">
        <p className="text-xs md:text-sm font-medium text-orange-500 italic text-center">
          "{text}"
        </p>
      </div>
    </div>
  );
}
