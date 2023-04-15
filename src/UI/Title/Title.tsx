import { FC, ReactNode } from "react";

import styles from "./Title.module.scss";

interface IProps {
  children: ReactNode[];
  align?: "left" | "center" | "right";
}

const Title: FC<IProps> = ({ children, align = "left" }) => {
  return (
    <div className={styles.title} style={{ textAlign: align }}>
      {children[0]}
      {children[1]}
    </div>
  );
};

export default Title;
