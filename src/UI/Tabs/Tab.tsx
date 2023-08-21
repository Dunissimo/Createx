import clsx from "clsx";
import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";

import styles from "./Tab.module.scss";

interface IProps {
  children: ReactNode;
  index: number;
  active: number;
  setActive: Dispatch<SetStateAction<number>>;
}

const Tab: FC<IProps> = ({ index, children, active, setActive }) => {
  const [isActive, setIsActive] = useState(false);

  const clickHander = (index: number) => {
    setActive(index);
  };

  useEffect(() => setIsActive(active === index), [active]);

  return (
    <div
      data-index={index}
      onClick={() => clickHander(index)}
      className={clsx(styles.tab, { [styles.active]: isActive })}
    >
      {children}
    </div>
  );
};

export default Tab;
