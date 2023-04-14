import { FC } from "react";

import styles from "./Course.module.scss";

import clsx from "clsx";
import { useUrl } from "../../../utils/hooks";
import Type from "../../Type/Type";
import { ICourse } from "../../../utils/interfaces";

interface IProps {
  course: ICourse;
  orientation: "vertical" | "horizontal";
}

const CourseUI: FC<IProps> = ({ course, orientation }) => {
  const { type, header, price, author, imgUrlWithExtension } = course;

  const url = useUrl(imgUrlWithExtension);

  return (
    <div className={styles[`card-${orientation}`]}>
      <img src={url} alt="" />
      <div className={styles.cardInfo}>
        <Type type={type} />
        <h2>{header}</h2>
        <div className={styles.cardPrice}>
          <span>${price}</span>|<span>by {author}</span>
        </div>
      </div>
    </div>
  );
};

export default CourseUI;
