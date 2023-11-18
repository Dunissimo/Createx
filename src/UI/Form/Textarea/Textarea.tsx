import { FC } from "react";
import clsx from "clsx";
import { ITextareaProps } from "@utils/interfaces";

import styles from "./Textarea.module.scss";

interface IProps extends ITextareaProps {
  className?: string;
  width?: string;
  cols?: number;
  rows?: number;
}

const Textarea: FC<IProps> = ({
  theme = "light",
  variant = "regular",
  className,
  width,
  ...props
}) => {
  return (
    <textarea
      className={clsx(
        styles.input,
        styles[`input-${variant}`],
        styles[`input-${theme}`],
        className,
      )}
      style={{ width }}
      {...props}
    ></textarea>
  );
};

export default Textarea;
