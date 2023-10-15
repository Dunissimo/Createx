import clsx from "clsx";
import { FC } from "react";
import { IEvent } from "@utils/interfaces";
import Button from "@ui/Button/Button";

import styles from "./Event.module.scss";

export type TOrientation = "horizontal" | "vertical";

interface IProps {
  event: IEvent;
  orientation?: TOrientation;
}

const EventUI: FC<IProps> = ({ event, orientation = "horizontal" }) => {
  const { date, text, type } = event;
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
        <h3>{text.title}</h3>
        <p>{type}</p>
      </div>
      <Button
        settings={{ outline: true, isFullWidth: orientation === "vertical" }}
      >
        View more
      </Button>
    </div>
  );
};

export default EventUI;
