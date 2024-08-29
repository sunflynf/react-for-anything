import clsx from "clsx";

type BlockProps = {
  children: any;
  className?: string;
};

export function Block({ children, className }: BlockProps) {
  return <div className={clsx("px-[5%]", className)}>{children}</div>;
}
