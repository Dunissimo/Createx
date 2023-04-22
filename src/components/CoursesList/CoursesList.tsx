import clsx from "clsx";
import { FC, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchCourses } from "../../redux/slices/coursesSlice";
import CourseUI from "../../UI/Cards/Course/Course";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";

import styles from "./Courses.module.scss";

interface IProps {
  limit?: number | string;
  orientation?: "vertical" | "horizontal";
  columns?: number;
  className?: string;
}

const CoursesList: FC<IProps> = ({
  className,
  limit = 6,
  orientation = "horizontal",
  columns = 2,
}) => {
  const dispatch = useAppDispatch();
  const { courses, loading, error } = useAppSelector((state) => state.courses);

  useEffect(() => {
    dispatch(fetchCourses());
  }, []);

  // TODO: переписать useEffect на RTK Query || axios

  if (error) {
    return <h1>Error!</h1>;
  }

  return (
    <div
      className={clsx("container", styles.list, className)}
      style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
    >
      {loading && <div>Loading...</div>}
      {courses.slice(0, +limit).map((course) => (
        <div key={course.id}>
          <Link className={styles.linkToCourse} to={`/courses/${course.id}`}>
            <CourseUI course={course} orientation={orientation} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CoursesList;
