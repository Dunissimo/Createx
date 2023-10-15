import { FC } from "react";
import clsx from "clsx";

import { CourseTypeEnum } from "@utils/interfaces";

import styles from "./Type.module.scss";

interface IProps {
  type: CourseTypeEnum;
}

const Type: FC<IProps> = ({ type }) => {
  return (
    <div>
      <span className={clsx(styles.type, styles[`type-${type.toLowerCase()}`])}>
        {type}
      </span>
    </div>
  );
};

export default Type;
