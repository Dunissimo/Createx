import { FC, SelectHTMLAttributes } from "react";
import clsx from "clsx";
import styles from "./Select.module.scss";

import line from "@assets/icons/Line (Stroke).svg";

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  values: string[];
  theme?: "light" | "dark";
  variant?: "small" | "regular" | "large";
}

const Select: FC<ISelectProps> = ({
  values,
  theme = "light",
  variant = "regular",
  ...props
}) => {
  return (
    <div className={styles.selectParent}>
      <select
        className={clsx(
          styles.select,
          styles[`select-${variant}`],
          styles[`select-${theme}`]
        )}
        {...props}
      >
        {values.map((value) => (
          <option className={styles.option}>{value}</option>
        ))}
      </select>
      <img className={styles.img} src={line} alt="" />
    </div>
  );
};

export default Select;
