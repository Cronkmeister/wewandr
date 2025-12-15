import { forwardRef, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  id?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, id, className = "", ...props }, ref) => {
    const inputId = id || "email-input";
    const errorId = `${inputId}-error`;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          type="email"
          autoComplete="email"
          aria-describedby={error ? errorId : undefined}
          aria-invalid={error ? "true" : "false"}
          className={`
            w-full px-4 py-3 text-base
            border border-gray-300 rounded-full
            focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500
            focus:ring-offset-2
            placeholder:text-gray-500
            gpu-accelerated
            ${
              error
                ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                : ""
            }
            ${className}
          `}
          {...props}
        />
        {error && (
          <p id={errorId} className="mt-2 text-sm text-red-600" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
