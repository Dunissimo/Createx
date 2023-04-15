import clsx from "clsx";
import { FC } from "react";

import styles from "./Row.module.scss";

interface IProps {
  children: React.ReactNode[];
  className?: string;
  settings?: {
    gap?: number | string;
    align?: "flex-start" | "center" | "flex-end";
    justify?: "flex-start" | "center" | "flex-end" | "justify-between";
  };
}

const Row: FC<IProps> = ({ className, children, settings }) => {
  const {
    align = "center",
    justify = "justify-between",
    gap = 0,
  } = settings || {};
  return (
    <div
      className={clsx(styles.row, className)}
      style={{ alignItems: align, justifyContent: justify, gap }}
    >
      <div className={styles.left}>{children[0]}</div>
      <div className={styles.right}>{children[1]}</div>
    </div>
  );
};

export default Row;
