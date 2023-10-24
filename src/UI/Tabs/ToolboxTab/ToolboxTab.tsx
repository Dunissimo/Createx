import { useGetCoursesQuery } from "@src/api/courses";
import clsx from "clsx";
import { MouseEventHandler, FC, useState } from "react";

import styles from "./ToolboxTab.module.scss";

interface ITabsProps {
  onClick?: MouseEventHandler<HTMLDivElement>;
  className?: string;
  values?: string[];
  defaultValue: string;
}

const ToolboxTabs: FC<ITabsProps> = ({
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

export default ToolboxTabs;
