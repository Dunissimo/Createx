import { FC } from "react";

import styles from "./Course.module.scss";

import notFound from "../../../assets/imgNotFound.png";
import clsx from "clsx";

interface IProps {
  type: "Marketing" | "Management" | "Recruting" | "Design" | "Development";
  header: string;
  price: string | number;
  author: string;
}

const CourseUI: FC<IProps> = ({ type, header, author, price }) => {
  console.log(type.toLowerCase());

  return (
    <div className={styles.card}>
      <img src={notFound} alt="" />
      <div className={styles.cardInfo}>
        <span
          className={clsx(
            styles[`card-${type.toLowerCase()}`],
            styles.cardType
          )}
        >
          {type}
        </span>
        <h2>{header}</h2>
        <div className={styles.cardPrice}>
          <span>${price}</span>|<span>by {author}</span>
        </div>
      </div>
    </div>
  );
};

export default CourseUI;
