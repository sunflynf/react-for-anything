import clsx from "clsx";
import { ButtonProps } from "./Button.type";

const VARIANT_COLORS: { [x: string]: [string, string, string] } = {
  primary: ["#e2e8f0", "#cbd5e1", "#94a3b8"],
  secondary: ["#e9c46a", "#d3b15f", "#c39747"],
  success: ["#e2e8f0", "#cbd5e1", "#94a3b8"],
  warning: ["#ffeaa7", "#ffdf72", "#f9c74f"],
  danger: ["#f53f5c", "#e83e8c", "#c92c5e"],
  info: ["#f0f3ff", "#c9d9ff", "#93a5fd"],
  light: ["#f8f9fa", "#e9ecef", "#ced4da"],
  dark: ["#212121", "#323232", "#191919"],
};

const getColors = (variant: string, disabled = false) => {
  const [root, hover, focus] = VARIANT_COLORS[variant];
  return clsx(
    `bg-[${root}]`,
    !disabled && `hover:bg-[${hover}]`
    // `focus:bg-[${focus}]`
  );
};

export function Button({
  type = "button",
  className,
  disabled = false,
  variant = "success",
  onClick,
  children,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={clsx(
        "uppercase",
        "px-[20px] py-[8px]",
        "rounded-[5px]",
        getColors(variant, disabled),
        disabled && "opacity-60",
        className
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
