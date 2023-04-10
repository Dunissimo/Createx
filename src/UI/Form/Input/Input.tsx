import {
  ChangeEventHandler,
  FC,
  HTMLInputTypeAttribute,
  ReactNode,
} from "react";

import styles from "./Input.module.scss";

interface IProps {
  children?: ReactNode;
  theme?: "light" | "dark";
  type: HTMLInputTypeAttribute;
  name?: string;
  id?: string;
  size?: "small" | "regular" | "large";
  placeholder?: string;
  changeHandler?: ChangeEventHandler;
}

const Input: FC<IProps> = ({
  theme = "light",
  type,
  name,
  id,
  size = "regular",
  children,
  placeholder,
  changeHandler = () => {},
}) => {
  return (
    <>
      {children && (
        <label
          className={`${styles.label} ${styles[`label-${theme}`]}`}
          htmlFor={id}
        >
          {children}
        </label>
      )}
      {/* TODO: сделать states для инпутов, а также сделать их управляемыми */}
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
    </>
  );
};

export default Input;
