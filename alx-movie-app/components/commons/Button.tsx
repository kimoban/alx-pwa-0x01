import React from "react";
import { ButtonProps } from "@/interfaces";

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "border-transparent bg-[var(--accent)] text-slate-950 shadow-[0_18px_40px_rgba(243,201,75,0.28)] hover:bg-[var(--accent-strong)]",
  secondary:
    "border-[var(--border-strong)] bg-white/5 text-white hover:border-[var(--accent)] hover:bg-white/10",
  ghost:
    "border-transparent bg-transparent text-[var(--muted)] hover:bg-white/8 hover:text-white",
};

const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-3 text-sm md:text-base",
  lg: "px-6 py-3.5 text-base md:text-lg",
};

const Button: React.FC<ButtonProps> = ({
  title,
  action,
  className = "",
  disabled = false,
  size = "md",
  type = "button",
  variant = "primary",
  ...rest
}) => {
  return (
    <button
      type={type}
      onClick={action}
      disabled={disabled}
      className={`inline-flex items-center justify-center rounded-full border font-semibold tracking-wide transition duration-200 ease-out hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/70 disabled:cursor-not-allowed disabled:opacity-50 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...rest}
    >
      {title}
    </button>
  );
};

export default Button;
