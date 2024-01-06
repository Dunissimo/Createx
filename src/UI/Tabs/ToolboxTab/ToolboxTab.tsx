import { useGetCoursesQuery } from "@src/api/courses";
import clsx from "clsx";
import { FC, MouseEventHandler, useEffect, useState } from "react";

import Select from "@src/UI/Form/Select/Select";
import { useGetPostsQuery } from "@src/api/posts";
import { ICourse } from "@src/utils/interfaces";
import { useSearchParams } from "react-router-dom";
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
  type?: "courses" | "blog";
}

const ToolboxTabs: FC<ITabsProps> = ({
  onClick,
  className,
  values,
  defaultValue,
  isWithBadge,
  type = "courses",
}) => {
  const [params, setSearchParams] = useSearchParams();
  const { data } = type == "courses" ? useGetCoursesQuery() : useGetPostsQuery();
  const [active, setActive] = useState(defaultValue);

  const clickHandler: MouseEventHandler<HTMLDivElement> = (e) => {
    setActive(e.currentTarget.dataset.type || defaultValue);

    onClick && onClick(e);
  };

  useEffect(() => {
    if (params.get("type") === defaultValue) {
      setActive(defaultValue);
    }
  }, [params]);

  return (
    <>
      <div className={className}>
        {values?.map((value) => (
          <div
            className={clsx(styles.tab, value.text == active ? styles.active : "")}
            data-type={value.text}
            onClick={clickHandler}
            key={value.text}
          >
            {value?.icon ? <img src={value.icon} alt="" /> : null}

            {value.text}

            {isWithBadge && (
              <div className={styles.tabBadge}>
                {value.text == "All"
                  ? (data as ICourse[])?.length
                  : (data as ICourse[])?.filter((item) => item.type == value.text).length}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className={styles.mobile}>
        <Select
          id="themes"
          defaultValue="All themes"
          values={values?.map((item) => item.text) || []}
          onChange={(e) => {
            setSearchParams(
              {
                type: e.target.value,
              },
              { replace: false },
            );
          }}
        />
      </div>
    </>
  );
};

export default ToolboxTabs;
