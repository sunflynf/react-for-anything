import clsx from "clsx";
import { BlockProps } from "./Block.type";

type GridBlockProps = BlockProps & {};

export function GridBlock({
  className,
  padding = "5%",
  fluid,
  children,
}: GridBlockProps) {
  return (
    <div
      className={clsx(
        !fluid &&
          `px-[${typeof padding === "number" ? padding + "px" : padding}]`,
        className
      )}
    >
      {children}
    </div>
  );
}
