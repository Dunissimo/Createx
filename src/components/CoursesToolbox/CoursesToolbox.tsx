import { FC, MouseEventHandler } from "react";

import styles from "./CoursesToolbox.module.scss";
import { Tabs } from "@src/UI/Tabs/Tab";
import Input from "@src/UI/Form/Input/Input";
import { useAppSelector } from "@src/utils/hooks";
import { TType } from "@src/utils/interfaces";
import { useSearchParams } from "react-router-dom";

const CoursesToolbox: FC = () => {
  const [params, setParams] = useSearchParams();
  const type = params.get("type") || "";

  const { items } = useAppSelector((state) => state.courses);

  const getLength = (type: TType) => {
    return items.filter((item) => item.type == type).length;
  };

  const clickHandler: MouseEventHandler<HTMLDivElement> = (e) => {
    if (!(e.target instanceof HTMLDivElement)) return;

    setParams({ type: e.target.dataset.type || "" });
  };

  return (
    <div className={styles.coursesToolbox}>
      <Tabs
        className={styles.coursesTabs}
        activeClassName={styles.coursesTabActive}
        onClick={clickHandler}
      >
        <div className={styles.tab} data-length={items.length} data-type="All">
          All
        </div>
        <div
          className={styles.tab}
          data-length={getLength("Marketing")}
          data-type="Marketing"
        >
          Marketing
        </div>
        <div
          className={styles.tab}
          data-length={getLength("Management")}
          data-type="Management"
        >
          Management
        </div>
        <div
          className={styles.tab}
          data-length={getLength("Recruting")}
          data-type="Recruting"
        >
          Recruting
        </div>
        <div
          className={styles.tab}
          data-length={getLength("Design")}
          data-type="Design"
        >
          Design
        </div>
        <div
          className={styles.tab}
          data-length={getLength("Development")}
          data-type="Development"
        >
          Development
        </div>
      </Tabs>

      <Input
        placeholder="Search course..."
        value={params.get("search") || ""}
        onChange={(e) =>
          setParams({
            type,
            search: e.target.value,
          })
        }
      />
    </div>
  );
};

export default CoursesToolbox;
