import { FC } from "react";
import Button from "../../Button/Button";
import clsx from "clsx";
import { IBlogCard } from "../../../utils/interfaces";
import { useUrl } from "../../../utils/hooks";

import styles from "./BlogCard.module.scss";

import calendar from "../../../assets/icons/Calendar.svg";
import clock from "../../../assets/icons/Clock.svg";

interface IProps {
  card: IBlogCard;
}

const BlogCardUI: FC<IProps> = ({ card }) => {
  const { details, imgName, p, title, type } = card;

  const firstLetterToUpperCase = (str: string) => {
    return `${str[0].toUpperCase()}${str.slice(1)}`;
  };

  const url = useUrl(`blog/${imgName}`);

  return (
    <section className={styles.card}>
      <div className={styles.cardImg}>
        <img src={url} alt="" />
        <span className={clsx(styles.theme, styles[type])}>
          {firstLetterToUpperCase(type)}
        </span>
      </div>
      <div className={styles.cardInfo}>
        <div className={styles.type}>{details.theme}</div>
        <div className={styles.date}>
          <img src={calendar} alt="" />
          {details.date}
        </div>
        <div className={styles.duration}>
          <img src={clock} alt="" />
          {details.duration}
        </div>
      </div>
      <div className={styles.title}>
        <h2>{title}</h2>
        <p>{p}</p>
      </div>
      <Button
        settings={{ isWithArrow: true, simple: true }}
        props={{ style: { fontWeight: "700" } }}
      >
        Listen
      </Button>
    </section>
  );
};

export default BlogCardUI;
