import { FC } from "react";
import { IInputProps } from "@utils/interfaces";

import styles from "./Checkbox.module.scss";

const Checkbox: FC<IInputProps> = ({ ...props }) => {
  return (
    <div className={styles.container}>
      <input className={styles.checkbox} type="checkbox" {...props} />
      <span className={styles.checkmark}></span>
    </div>
  );
};

export default Checkbox;
