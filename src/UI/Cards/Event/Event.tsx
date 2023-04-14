import clsx from "clsx";
import { FC } from "react";
import Button from "../../Button/Button";

import styles from "./Event.module.scss";

interface IProps {
  orientation: "horizontal" | "vertical";
}

const Event: FC<IProps> = ({ orientation }) => {
  return (
    <div className={clsx(styles.event, styles[`event-${orientation}`])}>
      {orientation === "horizontal" ? (
        <div className={styles.date}>
          <span className={styles.dateDay}>05</span>
          <div className={styles.dateHoriz}>
            <span className={styles.dateMonth}>July</span>
            <span className={styles.dateTime}>10:00 – 13:00</span>
          </div>
        </div>
      ) : (
        <div className={styles.dateVertic}>
          <span className={styles.dateDayNMonth}>05 July</span>
          <span className={styles.dateTime}>10:00 – 13:00</span>
        </div>
      )}

      <div className={styles.title}>
        <h3>
          How to apply methods of speculative design in practice. Worldbuilding
          prototyping. How to apply methods of speculative design in practice.
          Worldbuilding prototyping.
        </h3>
        <p>Onine workshop</p>
      </div>
      <Button
        settings={{ outline: true, isFullWidth: orientation === "vertical" }}
      >
        View more
      </Button>
    </div>
  );
};

export default Event;
