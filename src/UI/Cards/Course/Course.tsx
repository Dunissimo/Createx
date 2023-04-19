import { FC } from "react";

import styles from "./Course.module.scss";

import clsx from "clsx";
import { useUrl } from "../../../utils/hooks";
import Type from "../../Type/Type";
import { ICourse } from "../../../utils/interfaces";

interface IProps {
  course: ICourse;
  orientation?: "vertical" | "horizontal";
}

const CourseUI: FC<IProps> = ({ course, orientation = "horizontal" }) => {
  const { type, title, price, author, imgName } = course;

  let url = useUrl(`courses/${imgName}`);

  return (
    <div className={styles[`card-${orientation}`]}>
      <img src={url} alt="" />
      <div className={styles.cardInfo}>
        <Type type={type} />
        <h2>{title}</h2>
        <div className={styles.cardPrice}>
          <span>${price}</span>|<span>by {author}</span>
        </div>
      </div>
    </div>
  );
};

export default CourseUI;
