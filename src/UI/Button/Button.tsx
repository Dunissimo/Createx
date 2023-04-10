import { FC, MouseEventHandler, ReactNode } from "react";

import styles from "./Button.module.scss";

interface IProps {
  children: ReactNode;
  clickHandler?: MouseEventHandler;
  size?: "large" | "regular" | "small";
  disabled?: boolean;
  outline?: boolean;
  isFullWidth?: boolean;
}

const Button: FC<IProps> = ({
  size = "regular",
  outline,
  children,
  clickHandler = () => {},
  disabled,
  isFullWidth,
}) => {
  return (
    <button
      onClick={clickHandler}
      className={`${outline ? styles.buttonOutline : styles.button} ${
        styles[`button-${size}`]
      } ${isFullWidth ? styles["full-width"] : ""}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
