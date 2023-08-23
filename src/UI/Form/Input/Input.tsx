import { FC } from "react";
import clsx from "clsx";

import { IInputProps } from "@utils/interfaces";
import Checkbox from "@ui/Form/Checkbox/Checkbox";

import styles from "./Input.module.scss";

import arrow from "@assets/icons/arrow-right.svg";

interface IProps extends IInputProps {
  settings?: IInputProps["settings"] & {
    isWithArrow?: boolean;
  };
}

const Input: FC<IProps> = ({ settings, props }) => {
  const {
    label,
    theme = "light",
    size = "regular",
    isWithArrow,
  } = settings || {};

  const renderInput = () => {
    if (props?.type === "checkbox") {
      return <Checkbox settings={{ label }} {...props} />;
    } else {
      return (
        <div className={styles.inputDiv}>
          <input
            className={clsx(
              styles.input,
              styles[`input-${size}`],
              styles[`input-${theme}`]
            )}
            {...props}
          />
          {isWithArrow ? (
            <button className={styles.arrow} type="submit">
              <img src={arrow} alt="" />
            </button>
          ) : null}
        </div>
      );
    }
  };

  return (
    <div
      className={clsx(
        styles.parrentBlock,
        styles[theme],
        styles[label?.position!]
      )}
    >
      {label && (
        <label
          className={`${styles.label} ${styles[`label-${theme}`]}`}
          htmlFor={props?.id}
        >
          {label.content}
        </label>
      )}
      {/* TODO: сделать inputs управляемыми */}

      {renderInput()}
    </div>
  );
};

export default Input;
