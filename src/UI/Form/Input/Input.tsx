import Checkbox from "@ui/Form/Checkbox/Checkbox";
import { IInputProps } from "@utils/interfaces";
import clsx from "clsx";
import { FC } from "react";

import styles from "./Input.module.scss";

import arrow from "@assets/icons/arrow-right.svg";
import search from "@assets/icons/search.svg";

const icons = { arrow, search };

interface IProps extends IInputProps {
  image?: keyof typeof icons;
  imageAsSubmit?: boolean;
  className?: string;
  width?: string;
  inputClassName?: string;
}

const Input: FC<IProps> = ({
  theme = "light",
  variant = "regular",
  imageAsSubmit = false,
  image,
  className,
  width,
  inputClassName,
  ...props
}) => {
  if (props?.type === "checkbox") {
    return <Checkbox {...props} />;
  }

  return (
    <div
      className={clsx(styles.parrentBlock, styles[theme], className)}
      style={{ width }}
    >
      <div className={styles.inputDiv}>
        <input
          className={clsx(
            styles.input,
            styles[`input-${variant}`],
            styles[`input-${theme}`],
            inputClassName,
          )}
          {...props}
        />
        {image ? (
          <button
            type={imageAsSubmit ? "submit" : "button"}
            className={clsx(styles.image, imageAsSubmit && styles.submit)}
          >
            <img src={icons[image]} />
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Input;
