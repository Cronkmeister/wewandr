import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  type = "button",
  disabled = false,
  loading = false,
  className = "",
  onClick,
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={`
        inline-flex items-center justify-center gap-2
        px-6 py-3 text-base font-medium
        bg-orange-500 text-white rounded-full
        hover:bg-orange-600 focus:bg-orange-600
        focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed
        transition-all duration-300 ease-out
        ${className}
      `}
      aria-live="polite"
    >
      {loading && (
        <svg
          className="animate-spin h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {children}
    </button>
  );
}
