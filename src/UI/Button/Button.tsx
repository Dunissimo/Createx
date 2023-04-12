import { FC, MouseEventHandler, ReactNode } from "react";
import clsx from "clsx";
import styles from "./Button.module.scss";

interface IProps {
  children: ReactNode;

  settings?: {
    size?: "xl" | "large" | "regular" | "small";
    outline?: boolean;
    isFullWidth?: boolean;
    simple?: boolean;
  };
  props?: {
    disabled?: boolean;
    onClick?: MouseEventHandler;
  };
}

const Button: FC<IProps> = ({ children, settings, props }) => {
  const { simple, outline, isFullWidth, size } = settings || {};

  if (simple) {
    return (
      <button className={clsx(styles["button-simple"])} {...props}>
        {children}
      </button>
    );
  }

  return (
    <button
      className={clsx(styles[`button-${size}`], styles.button, {
        [styles.buttonOutline]: outline,
        [styles["full-width"]]: isFullWidth,
      })}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
