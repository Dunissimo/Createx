import clsx from "clsx";
import { CSSProperties, FC, ReactNode } from "react";

import styles from "./Row.module.scss";

interface IProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  settings?: {
    gap?: number | string;
    align?: "flex-start" | "center" | "flex-end";
    justify?: "flex-start" | "center" | "flex-end" | "justify-between";
  };
}

const Row: FC<IProps> = ({ className, style, children, settings }) => {
  const { align = "center", justify = "justify-between", gap = 0 } = settings || {};

  return (
    <div
      className={clsx(styles.row, className)}
      style={{ alignItems: align, justifyContent: justify, gap: gap || "", ...style }}
    >
      {children}
    </div>
  );
};

export default Row;
