import CourseUI from "@src/UI/Cards/Course/Course";
import EventUI, { TOrientation } from "@src/UI/Cards/Event/Event";
import { useGetCoursesQuery } from "@src/api/courses";
import { useGetEventsQuery } from "@src/api/events";
import {
  filterByType,
  filterItems,
  handleLinkClick,
  sortByTime,
} from "@src/utils/helpers";
import {
  BlogTabsTypeEnum,
  CourseTypeEnum,
  EventTypeEnum,
  IBlogCard,
  ICourse,
  IEvent,
} from "@src/utils/interfaces";
import clsx from "clsx";
import { CSSProperties, FC } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

import BlogCardUI from "@src/UI/Blog/BlogCard/BlogCard";
import { useGetPostsQuery } from "@src/api/posts";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "./ItemList.module.scss";

interface ICommonProps {
  limit?: number;
  orientation?: TOrientation;
  search?: string;
  itemType?: CourseTypeEnum | EventTypeEnum | BlogTabsTypeEnum;
  type?: "event" | "course" | "blog";
  columns?: number;
  sortBy?: "Newest" | "Oldest";
}

interface IItemListProps extends ICommonProps {}

const ItemsList: FC<IItemListProps> = (props) => {
  const { columns = 3, orientation = "horizontal", type, limit } = props;

  const { data, isError, isLoading } =
    type == "course"
      ? useGetCoursesQuery()
      : type == "event"
        ? useGetEventsQuery()
        : useGetPostsQuery();

  if (isError) {
    return <div>Error!</div>;
  }

  return (
    <div
      className={clsx(styles[`item-${orientation}`], styles[`item-${type}`])}
      style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
    >
      {isLoading ? (
        new Array(limit || 9)
          .fill(0)
          .map((_, ind) => <Skeleton key={ind} count={1} height={200} />)
      ) : (
        <Item data={data} {...props} />
      )}
    </div>
  );
};

interface IItemProps extends ICommonProps {
  data?: ICourse[] | IEvent[] | IBlogCard[];
  style?: CSSProperties;
}

export const Item: FC<IItemProps> = ({
  data,
  limit = 3,
  search = "",
  orientation,
  sortBy = "Newest",
  type,
  itemType,
  style,
}) => {
  if (type == "course") {
    return (
      <>
        {(data as ICourse[])
          .slice(0, +limit)
          .filter((item) => filterItems(item, search, "course"))
          .filter((item) => filterByType(item, itemType))
          .map((item) => (
            <div key={item.id} style={style}>
              <Link
                className={styles.linkToItem}
                onClick={handleLinkClick}
                to={`/courses/${item.id}`}
              >
                <CourseUI course={item as ICourse} orientation={orientation} />
              </Link>
            </div>
          ))}
      </>
    );
  }

  if (type == "event") {
    return (
      <>
        {(data as IEvent[])
          .slice(0, +limit)
          .filter((item) => filterItems(item, search, "event"))
          .filter((item) => filterByType(item, itemType))
          .sort((a, b) => sortByTime(a, b, sortBy))
          .map((item) => (
            <div key={item.id} style={style}>
              <Link
                className={styles.linkToItem}
                onClick={handleLinkClick}
                to={`/events/${item.id}`}
              >
                <EventUI event={item} orientation={orientation as TOrientation} />
              </Link>
            </div>
          ))}
      </>
    );
  }

  if (type == "blog") {
    return (
      <>
        {[...(data as IBlogCard[])]
          .slice(0, +limit)
          .filter((item) => filterByType(item, itemType))
          .filter((item) => filterItems(item, search, "blog"))
          .sort((a, b) => sortByTime(a, b, sortBy))
          .map((item) => (
            <div key={item.id} style={style}>
              <BlogCardUI card={item} />
            </div>
          ))}
      </>
    );
  }

  return <div>Неизвестная ошибка</div>;
};

export default ItemsList;
