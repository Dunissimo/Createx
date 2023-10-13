import clsx from "clsx";
import {
  Dispatch,
  FC,
  MouseEventHandler,
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

  const clickHandler = (index: number) => {
    setActive(index);
  };

  useEffect(() => setIsActive(active === index), [active]);

  return (
    <div
      data-index={index}
      onClick={() => clickHandler(index)}
      className={clsx(styles.tab, { [styles.active]: isActive })}
    >
      {children}
    </div>
  );
};

interface ITabsProps {
  children: ReactNode[];
  onClick?: MouseEventHandler<HTMLDivElement>;
  className?: string;
  activeClassName?: string;
}

export const Tabs: FC<ITabsProps> = ({
  children,
  onClick,
  className,
  activeClassName,
}) => {
  const [active, setActive] = useState(0);

  const clickHandler: MouseEventHandler<HTMLDivElement> = (e) => {
    setActive(Number(e.currentTarget.dataset.index));

    onClick && onClick(e);
  };

  return (
    <div className={className}>
      {children.map((child, index) => (
        <div
          data-index={index}
          className={clsx(active == index && activeClassName)}
          onClick={clickHandler}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default Tab;
