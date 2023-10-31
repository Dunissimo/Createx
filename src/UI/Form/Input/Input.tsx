import { FC } from "react";
import clsx from "clsx";
import { IInputProps } from "@utils/interfaces";
import Checkbox from "@ui/Form/Checkbox/Checkbox";

import styles from "./Input.module.scss";

import arrow from "@assets/icons/arrow-right.svg";
import search from "@assets/icons/search.svg";

const icons = { arrow, search };

interface IProps extends IInputProps {
  image?: keyof typeof icons;
  imageAsSubmit?: boolean;
  className?: string;
  width?: string;
}

const Input: FC<IProps> = ({
  theme = "light",
  variant = "regular",
  imageAsSubmit = false,
  image,
  className,
  width,
  ...props
}) => {
  if (props?.type === "checkbox") {
    return <Checkbox {...props} />;
  }

  return (
    <div className={clsx(styles.parrentBlock, styles[theme])} style={{ width }}>
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
        {image ? (
          <button
            type={imageAsSubmit ? "submit" : "button"}
            className={clsx(styles.image, imageAsSubmit && styles.submit)}
          >
            <img src={icons[image]} />
          </button>
        ) : null}
        {/* {image ? ( */}
        {/* <button className={styles.arrow} type="submit"> */}
        {/* <img src={image!} /> */}
        {/* </button> */}
        {/* ) : null} */}
      </div>
    </div>
  );
};

export default Input;
