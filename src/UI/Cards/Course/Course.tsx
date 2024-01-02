import { FC } from "react";

import Type from "@ui/Type/Type";
import { useUrl } from "@utils/hooks";
import { ICourse } from "@utils/interfaces";

import { handleLinkClick } from "@src/utils/helpers";
import { Link } from "react-router-dom";
import styles from "./Course.module.scss";

interface IProps {
  course: ICourse;
  orientation?: "vertical" | "horizontal";
}

const CourseUI: FC<IProps> = ({ course, orientation = "horizontal" }) => {
  const { type, title, price, author, imgName } = course;

  const url = useUrl(`courses/${imgName}`);

  return (
    <Link onClick={handleLinkClick} to={`/courses/${course.id}`}>
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
    </Link>
  );
};

export default CourseUI;
