import { CSSProperties, FC, ReactNode } from "react";

import clsx from "clsx";
import styles from "./Title.module.scss";

interface IProps {
  children: ReactNode[];
  className?: string;
  align?: "left" | "center" | "right";
  style?: CSSProperties;
}

const Title: FC<IProps> = ({ className, children, align = "left", style }) => {
  return (
    <div
      className={clsx(styles.title, className)}
      style={{ textAlign: align, color: "#1e212c", ...style }}
    >
      {children[0]}
      {children[1]}
    </div>
  );
};

export default Title;
