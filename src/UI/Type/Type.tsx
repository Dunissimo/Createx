import { FC } from "react";
import { TType } from "../../utils/interfaces";
import clsx from "clsx";

import styles from "./Type.module.scss";

interface IProps {
  type: TType;
}

const Type: FC<IProps> = ({ type }) => {
  return (
    <span className={clsx(styles.type, styles[`type-${type.toLowerCase()}`])}>
      {type}
    </span>
  );
};

export default Type;
