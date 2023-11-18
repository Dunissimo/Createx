import { FC, ReactNode, useState } from "react";
import clsx from "clsx";

import styles from "./Accordion.module.scss";

interface IProps {
  head: ReactNode;
  children: ReactNode;
}

const Accordion: FC<IProps> = ({ head, children }) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((state) => !state);
  };

  return (
    <div className={styles.accordion}>
      <h3 onClick={toggle} className={clsx(open && styles.accOpen)}>
        {head}
      </h3>

      <div className={clsx(styles.body, open && styles.accOpen)}>{children}</div>
    </div>
  );
};

export default Accordion;
