import { FC } from "react";
import clsx from "clsx";
import { IInputProps } from "@utils/interfaces";
import Checkbox from "@ui/Form/Checkbox/Checkbox";

import styles from "./Input.module.scss";

import arrow from "@assets/icons/arrow-right.svg";

interface IProps extends IInputProps {
  isWithArrow?: boolean;
  className?: string;
}

const Input: FC<IProps> = ({
  theme = "light",
  variant = "regular",
  isWithArrow,
  className,
  ...props
}) => {
  if (props?.type === "checkbox") {
    return <Checkbox {...props} />;
  }

  return (
    <div className={clsx(styles.parrentBlock, styles[theme])}>
      <div className={styles.inputDiv}>
        <input
          className={clsx(
            styles.input,
            styles[`input-${variant}`],
            styles[`input-${theme}`],
            className
          )}
          {...props}
        />
        {isWithArrow ? (
          <button className={styles.arrow} type="submit">
            <img src={arrow} alt="" />
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Input;
