import { FC, MouseEventHandler } from "react";

import styles from "./CoursesToolbox.module.scss";
import Input from "@src/UI/Form/Input/Input";
import { CourseTypeEnum } from "@src/utils/interfaces";
import { useSearchParams } from "react-router-dom";
import ToolboxTabs from "@src/UI/Tabs/ToolboxTab/ToolboxTab";

interface ICoursesToolboxProps {
  type: CourseTypeEnum;
}

const CoursesToolbox: FC<ICoursesToolboxProps> = ({ type }) => {
  const [params, setParams] = useSearchParams();

  const clickHandler: MouseEventHandler<HTMLDivElement> = (e) => {
    if (!(e.target instanceof HTMLDivElement)) return;

    setParams({ type: e.target.dataset.type || "" });
  };

  return (
    <div className={styles.coursesToolbox}>
      <ToolboxTabs
        className={styles.coursesTabs}
        values={[
          { text: CourseTypeEnum.All },
          { text: CourseTypeEnum.Marketing },
          { text: CourseTypeEnum.Management },
          { text: CourseTypeEnum.Recruting },
          { text: CourseTypeEnum.Design },
          { text: CourseTypeEnum.Development },
        ]}
        onClick={clickHandler}
        defaultValue={type}
      />

      <Input
        image="search"
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
