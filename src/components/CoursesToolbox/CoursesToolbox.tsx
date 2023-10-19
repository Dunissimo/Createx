import { FC, MouseEventHandler } from "react";

import styles from "./CoursesToolbox.module.scss";
import { Tabs } from "@src/UI/Tabs/Tab";
import Input from "@src/UI/Form/Input/Input";
import { useAppSelector } from "@src/utils/hooks";
import { CourseTypeEnum } from "@src/utils/interfaces";
import { useSearchParams } from "react-router-dom";
import { useGetCoursesQuery } from "@src/api/courses";

interface ICoursesToolboxProps {
  type: CourseTypeEnum;
}

const CoursesToolbox: FC<ICoursesToolboxProps> = ({ type }) => {
  const [params, setParams] = useSearchParams();

  const { data: courses } = useGetCoursesQuery();

  const getLength = (type: CourseTypeEnum) => {
    return courses?.filter((item) => item.type == type).length;
  };

  const clickHandler: MouseEventHandler<HTMLDivElement> = (e) => {
    if (!(e.target instanceof HTMLDivElement)) return;

    setParams({ type: e.target.dataset.type || "" });
  };

  return (
    <div className={styles.coursesToolbox}>
      <Tabs
        className={styles.coursesTabs}
        values={[
          "All",
          CourseTypeEnum.Marketing,
          CourseTypeEnum.Management,
          CourseTypeEnum.Recruting,
          CourseTypeEnum.Design,
          CourseTypeEnum.Development,
        ]}
        onClick={clickHandler}
        defaultValue={type}
      />

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
