import { Dispatch, FC, ReactNode, SetStateAction } from "react";
import clsx from "clsx";

import styles from "./Tab.module.scss";

interface IProps {
  children: ReactNode;
  index: number;
  active: number;
  setActive: Dispatch<SetStateAction<number>>;
}

// TODO: разобраться с логикой табов, убрать лишнее, отрефакторить, в общем

const Tab: FC<IProps> = ({ index, children, active, setActive }) => {
  return (
    <div
      data-index={index}
      onClick={() => setActive(index)}
      className={clsx(styles.tab, { [styles.active]: active === index })}
    >
      {children}
    </div>
  );
};

export default Tab;
