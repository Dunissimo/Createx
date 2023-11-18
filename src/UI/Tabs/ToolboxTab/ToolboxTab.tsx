import { useGetCoursesQuery } from "@src/api/courses";
import clsx from "clsx";
import { MouseEventHandler, FC, useState } from "react";

import styles from "./ToolboxTab.module.scss";

export type ToolboxValue = {
  text: string;
  icon?: string;
};

interface ITabsProps {
  onClick?: MouseEventHandler<HTMLDivElement>;
  className?: string;
  values?: ToolboxValue[];
  defaultValue: string;
  isWithBadge?: boolean;
}

const ToolboxTabs: FC<ITabsProps> = ({
  onClick,
  className,
  values,
  defaultValue,
  isWithBadge,
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
          className={clsx(styles.tab, value.text == active ? styles.active : "")}
          data-type={value}
          onClick={clickHandler}
          key={value.text}
        >
          {value?.icon ? <img src={value.icon} alt="" /> : null}

          {value.text}

          {isWithBadge && (
            <div className={styles.tabBadge}>
              {value.text == "All"
                ? courses?.length
                : courses?.filter((course) => course.type == value.text).length}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ToolboxTabs;
