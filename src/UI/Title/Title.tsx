import { CSSProperties, FC, ReactNode } from "react";

import styles from "./Title.module.scss";

interface IProps {
  children: ReactNode[];
  align?: "left" | "center" | "right";
  style?: CSSProperties;
}

const Title: FC<IProps> = ({ children, align = "left", style }) => {
  return (
    <div className={styles.title} style={{ textAlign: align, ...style }}>
      {children[0]}
      {children[1]}
    </div>
  );
};

export default Title;
