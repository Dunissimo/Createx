import clsx from "clsx";
import { FC } from "react";
import { IEvent } from "../../../utils/interfaces";
import Button from "../../Button/Button";

import styles from "./Event.module.scss";

interface IProps {
  event: IEvent;
  orientation: "horizontal" | "vertical";
}

const Event: FC<IProps> = ({ event, orientation }) => {
  const { date, title, button } = event;
  return (
    <div className={clsx(styles.event, styles[`event-${orientation}`])}>
      {orientation === "horizontal" ? (
        <div className={styles.date}>
          <span className={styles.dateDay}>{date.day}</span>
          <div className={styles.dateHoriz}>
            <span className={styles.dateMonth}>{date.month}</span>
            <span className={styles.dateTime}>{date.time}</span>
          </div>
        </div>
      ) : (
        <div className={styles.dateVertic}>
          <span className={styles.dateDayNMonth}>
            {date.day} {date.month}
          </span>
          <span className={styles.dateTime}>{date.time}</span>
        </div>
      )}

      <div className={styles.title}>
        <h3>{title.h3}</h3>
        <p>{title.p}</p>
      </div>
      <Button
        settings={{ outline: true, isFullWidth: orientation === "vertical" }}
      >
        {button}
      </Button>
    </div>
  );
};

export default Event;
