import { ReactNode } from "react";

interface NoticeProps {
  type: "success" | "duplicate" | "error";
  children: ReactNode;
  className?: string;
}

export default function Notice({
  type,
  children,
  className = "",
}: NoticeProps) {
  const baseClasses =
    "p-4 rounded-lg border transition-all duration-300 gpu-accelerated";

  const typeClasses = {
    success:
      "bg-green-50 border-green-200 text-green-800 dark:bg-green-900/20 dark:border-green-700 dark:text-green-300 hover:shadow-lg hover:scale-[1.02]",
    duplicate:
      "bg-blue-50 border-blue-200 text-blue-800 dark:bg-blue-900/20 dark:border-blue-700 dark:text-blue-300 hover:shadow-lg hover:scale-[1.02]",
    error:
      "bg-red-50 border-red-200 text-red-800 dark:bg-red-900/20 dark:border-red-700 dark:text-red-300 hover:shadow-lg hover:scale-[1.02]",
  };

  return (
    <div
      className={`${baseClasses} ${typeClasses[type]} ${className}`}
      role="alert"
      aria-live="polite"
    >
      {children}
    </div>
  );
}
