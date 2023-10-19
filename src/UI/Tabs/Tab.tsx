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
import { useGetCoursesQuery } from "@src/api/courses";

interface IProps {
  children: ReactNode;
  index: number;
  active: number;
  setActive: Dispatch<SetStateAction<number>>;
  badge?: number;
}

// TODO: разобраться с логикой табов, убрать лишнее, отрефакторить, в общем

const Tab: FC<IProps> = ({ index, children, active, setActive, badge }) => {
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

      {badge ? badge : null}
    </div>
  );
};

interface ITabsProps {
  onClick?: MouseEventHandler<HTMLDivElement>;
  className?: string;
  values?: string[];
  defaultValue: string;
}

export const Tabs: FC<ITabsProps> = ({
  onClick,
  className,
  values,
  defaultValue,
}) => {
  const { data: courses } = useGetCoursesQuery();
  const [active, setActive] = useState(defaultValue);

  const clickHandler: MouseEventHandler<HTMLDivElement> = (e) => {
    setActive(e.currentTarget.dataset.type || "All");

    onClick && onClick(e);
  };

  return (
    <div className={className}>
      {values?.map((value) => (
        <div
          className={clsx(styles.tab, value == active ? styles.active : "")}
          data-type={value}
          onClick={clickHandler}
        >
          {value}

          {/* TODO: стилизовать badge */}
          <div>
            {value == "All"
              ? courses?.length
              : courses?.filter((course) => course.type == value).length}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tab;
