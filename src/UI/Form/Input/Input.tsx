import { ChangeEventHandler, FC, HTMLInputTypeAttribute } from "react";
import clsx from "clsx";
import Checkbox from "../Checkbox/Checkbox";

import styles from "./Input.module.scss";
import { IInputProps } from "../../../utils/interfaces";

const Input: FC<IInputProps> = ({ settings, props }) => {
  const { label, theme, size } = settings || {};

  const renderInput = () => {
    if (props?.type === "checkbox") {
      return <Checkbox settings={{ label }} {...props} />;
    } else {
      return (
        <input
          className={clsx(
            styles.input,
            styles[`input-${size}`],
            styles[`input-${theme}`]
          )}
          {...props}
        />
      );
    }
  };

  return (
    <div
      className={clsx(
        styles.parrentBlock,
        styles[label?.position!],
        styles.theme
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
      {/* TODO: сделать states для инпутов, а также сделать их управляемыми */}

      {renderInput()}
    </div>
  );
};

export default Input;
