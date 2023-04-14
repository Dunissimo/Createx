import { FC } from "react";

import styles from "./Course.module.scss";

import notFound from "../../../assets/imgNotFound.png";
import clsx from "clsx";
import { useUrl } from "../../../utils/hooks";

interface IProps {
  type: "Marketing" | "Management" | "Recruting" | "Design" | "Development";
  header: string;
  price: string | number;
  author: string;
  imgUrlWithExtension: string;
  orientation: "vertical" | "horizontal";
}

const CourseUI: FC<IProps> = ({
  type,
  header,
  author,
  price,
  imgUrlWithExtension,
  orientation,
}) => {
  const url = useUrl(imgUrlWithExtension);

  return (
    <div className={styles[`card-${orientation}`]}>
      <img src={url} alt="" />
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
