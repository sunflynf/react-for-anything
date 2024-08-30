import clsx from "clsx";
import { ButtonProps } from "./Button.type";

import circleDashed from "../../assets/circle-dashed.svg";

const VARIANT_BG = {
  primary: "bg-teal-400 hover:bg-teal-500",
  secondary: "bg-pink-400 hover:bg-pink-500",
  success: "bg-green-400 hover:bg-green-500",
  warning: "bg-yellow-400 hover:bg-yellow-500",
  danger: "bg-red-400 hover:bg-red-500",
  info: "bg-cyan-400 hover:bg-cyan-500",
  light: "bg-gray-50 hover:bg-gray-100",
  dark: "bg-neutral-950 hover:bg-neutral-900",
};

const VARIANT_BG_FOCUS = {
  primary: "focus:bg-teal-600",
  secondary: "focus:bg-pink-600",
  success: "focus:bg-green-600",
  warning: "focus:bg-yellow-600",
  danger: "focus:bg-red-600",
  info: "focus:bg-cyan-600",
  light: "focus:bg-gray-200",
  dark: "focus:bg-neutral-800",
};

export function Button({
  type = "button",
  className,
  disabled = false,
  variant = "primary",
  focusEffect = false,
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
        "border",
        VARIANT_BG[variant],
        focusEffect && VARIANT_BG_FOCUS[variant],
        disabled && "opacity-60",
        "flex",
        variant === "dark" && "text-white",
        className
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {disabled && (
        <img
          src={circleDashed}
          width={20}
          height={20}
          className={"mr-[5px] animate-spin"}
        />
      )}
      {children}
    </button>
  );
}
