import { ChangeEventHandler, FC } from "react";
import { IInputProps } from "../../../utils/interfaces";

import styles from "./Checkbox.module.scss";

const Checkbox: FC<IInputProps> = ({ changeHandler, name, id, label }) => {
  return (
    <div className={styles.container}>
      <input
        className={styles.checkbox}
        type="checkbox"
        name={name}
        id={id}
        onChange={changeHandler}
      />
      <span className={styles.checkmark}></span>
    </div>
  );
};

export default Checkbox;
