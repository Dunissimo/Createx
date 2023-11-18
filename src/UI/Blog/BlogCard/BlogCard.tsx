import { FC } from "react";
import Button from "@ui/Button/Button";
import clsx from "clsx";
import { IBlogCard } from "@utils/interfaces";
import { useUrl } from "@utils/hooks";

import styles from "./BlogCard.module.scss";

import calendar from "@assets/icons/Calendar.svg";
import clock from "@assets/icons/Clock.svg";
import { Link } from "react-router-dom";

interface IProps {
  card: IBlogCard;
}

const buttons = {
  video: "Watch",
  podcast: "Listen",
  article: "Read",
};

const firstLetterToUpperCase = (str: string) => {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
};

const BlogCardUI: FC<IProps> = ({ card }) => {
  const { details, imgName, p, title, type, id } = card;

  const url = useUrl(`blog/${imgName}`);

  const duration = details.duration && (
    <div className={styles.duration}>
      <img src={clock} alt="" />
      {details.duration}
    </div>
  );

  return (
    <section className={styles.card}>
      <div className={styles.cardImg}>
        <Link to={`/blog/${id}`}>
          <img src={url} alt="" />
        </Link>

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
        {duration}
      </div>
      <div className={styles.title}>
        <h2>{title}</h2>
        <p>{p}</p>
      </div>

      <Button isWithArrow simple>
        <Link to={`/blog/${id}`} style={{ fontWeight: "700", color: "#1e212c" }}>
          {buttons[type]}
        </Link>
      </Button>
    </section>
  );
};

export default BlogCardUI;
