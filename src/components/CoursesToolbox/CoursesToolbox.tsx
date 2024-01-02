import { FC, MouseEventHandler } from "react";

import Input from "@src/UI/Form/Input/Input";
import ToolboxTabs from "@src/UI/Tabs/ToolboxTab/ToolboxTab";
import { CourseTypeEnum } from "@src/utils/interfaces";
import { useSearchParams } from "react-router-dom";
import styles from "./CoursesToolbox.module.scss";

interface ICoursesToolboxProps {}

const CoursesToolbox: FC<ICoursesToolboxProps> = () => {
  const [params, setParams] = useSearchParams();
  const type = params.get("type") || "";
  const search = params.get("search") || "";

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
        defaultValue={CourseTypeEnum.All}
      />

      <Input
        image="search"
        placeholder="Search course..."
        value={search}
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
