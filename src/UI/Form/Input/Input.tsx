import { ChangeEventHandler, FC, HTMLInputTypeAttribute } from "react";
import Checkbox from "../Checkbox/Checkbox";

import styles from "./Input.module.scss";

interface IProps {
  theme?: "light" | "dark";
  type?: HTMLInputTypeAttribute;
  name?: string;
  id?: string;
  size?: "small" | "regular" | "large";
  placeholder?: string;
  label?: {
    position: "top" | "right";
    content: string;
  };
  changeHandler?: ChangeEventHandler;
}

const Input: FC<IProps> = ({
  theme = "light",
  type = "text",
  name,
  id,
  size = "regular",
  placeholder,
  label,
  changeHandler = () => {},
}) => {
  const renderInput = () => {
    if (type === "checkbox") {
      return (
        <Checkbox
          label={label}
          name={name}
          id={id}
          changeHandler={changeHandler}
        />
      );
    } else {
      return (
        <input
          type={type}
          name={name || ""}
          id={id || ""}
          placeholder={placeholder || ""}
          className={`${styles.input} ${styles[`input-${size}`]} ${
            styles[`input-${theme}`]
          }`}
          onChange={changeHandler}
        />
      );
    }
  };

  return (
    <div
      className={`${styles.parrentBlock} ${styles[label?.position!]} ${
        styles[theme]
      }`}
    >
      {label && (
        <label
          className={`${styles.label} ${styles[`label-${theme}`]}`}
          htmlFor={id}
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
