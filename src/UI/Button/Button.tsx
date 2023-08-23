import {
  ButtonHTMLAttributes,
  CSSProperties,
  FC,
  MouseEventHandler,
  ReactNode,
} from "react";
import clsx from "clsx";

import styles from "./Button.module.scss";

import arrowImg from "@assets/icons/arrow-red.svg";

interface IProps {
  children: ReactNode;

  settings?: {
    size?: "xl" | "large" | "regular" | "small";
    outline?: boolean;
    isFullWidth?: boolean;
    simple?: boolean;
    isWithArrow?: boolean;
  };
  props?: {
    disabled?: boolean;
    onClick?: MouseEventHandler;
    style?: CSSProperties;
    className?: string;
    type?: "submit" | "reset" | "button";
  };
}

const Button: FC<IProps> = ({
  children,
  settings,
  props = { type: "button" },
}) => {
  const {
    simple,
    outline,
    isFullWidth,
    size = "regular",
    isWithArrow,
  } = settings || {};

  const arrow = isWithArrow ? <img src={arrowImg} alt="" /> : null;

  if (simple) {
    return (
      <button className={clsx(styles["button-simple"])} {...props}>
        {children}
        {arrow}
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
      {arrow}
    </button>
  );
};

export default Button;
