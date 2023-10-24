import {
  Dispatch,
  FC,
  MouseEventHandler,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import clsx from "clsx";
import { useGetCoursesQuery } from "@src/api/courses";

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
