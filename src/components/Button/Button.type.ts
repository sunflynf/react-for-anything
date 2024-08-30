import { MouseEventHandler } from "react";

export type Variant = {
  variant?:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | "info"
    | "light"
    | "dark";
};

export type ButtonProps = {
  type?: "button" | "submit" | "reset";
  className?: string;
  focusEffect?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  children: any;
} & Variant;
