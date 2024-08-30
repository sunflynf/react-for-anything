import clsx from "clsx";
import { BlockProps } from "./Block.type";

type FlexBlockProps = BlockProps & {
  column?: boolean;
  reverse?: boolean;
  wrap?: boolean;
  wrapReverse?: boolean;
};

function FlexBlock({
  className,
  padding = "5%",
  fluid = false,
  column = false,
  reverse = false,
  wrap = true,
  wrapReverse = false,
  children,
}: FlexBlockProps) {
  return (
    <div
      className={clsx(
        !fluid &&
          `px-[${typeof padding === "number" ? padding + "px" : padding}]`,
        "flex",
        {
          "flex-row": !column && !reverse,
          "flex-row-reverse": !column && reverse,
          "flex-col": column && !reverse,
          "flex-col-reverse": column && reverse,
          "flex-wrap": wrap,
          "flex-wrap-reverse": wrap && wrapReverse,
        },
        className
      )}
    >
      {children}
    </div>
  );
}

type FlexBlockItemProps = {
  children: any;
};
function FlexBlockItem({ children }: FlexBlockItemProps) {
  return <div>{children}</div>;
}

FlexBlock.Item = FlexBlockItem;

export { FlexBlock };
