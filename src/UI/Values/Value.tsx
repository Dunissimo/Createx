import { FC, ReactNode } from "react";

import styles from "./Value.module.scss";

interface IProps {
  img: string;
  title: string;
  par: ReactNode;
}

const Value: FC<IProps> = ({ img, title, par }) => {
  return (
    <div className={styles.value}>
      <img src={img} alt="" />
      <h3>{title}</h3>
      <p>{par}</p>
    </div>
  );
};

export default Value;
