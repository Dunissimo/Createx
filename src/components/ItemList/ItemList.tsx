import EventUI, { TOrientation } from "@src/UI/Cards/Event/Event";
import clsx from "clsx";
import { FC } from "react";
import { Link } from "react-router-dom";
import {
  filterByType,
  filterItems,
  handleLinkClick,
  sortByTime,
} from "@src/utils/helpers";
import CourseUI from "@src/UI/Cards/Course/Course";
import {
  ICourse,
  IEvent,
  CourseTypeEnum,
  EventTypeEnum,
  IBlogCard,
} from "@src/utils/interfaces";
import { useGetCoursesQuery } from "@src/api/courses";
import { useGetEventsQuery } from "@src/api/events";
import Skeleton from "react-loading-skeleton";

import styles from "./ItemList.module.scss";
import "react-loading-skeleton/dist/skeleton.css";
import BlogCardUI from "@src/UI/Blog/BlogCard/BlogCard";
import { useGetPostsQuery } from "@src/api/posts";

interface IItemListProps {
  limit?: number;
  orientation?: TOrientation;
  search?: string;
  itemType?: CourseTypeEnum | EventTypeEnum;
  type?: "event" | "course" | "blog";
  columns?: number;
  sortBy?: "Newest" | "Oldest";
}

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
      className={clsx(styles[`item-${orientation}`])}
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

interface IItemProps {
  data?: ICourse[] | IEvent[] | IBlogCard[];
  limit?: number;
  orientation?: TOrientation;
  search?: string;
  itemType?: CourseTypeEnum | EventTypeEnum;
  type?: "event" | "course" | "blog";
  columns?: number;
  sortBy?: "Newest" | "Oldest";
}

export const Item: FC<IItemProps> = ({
  data,
  limit = 3,
  search = "",
  orientation,
  sortBy = "Newest",
  type,
  itemType,
}) => {
  if (type == "course") {
    return (
      <>
        {(data as ICourse[])
          .slice(0, +limit)
          .filter((item) => filterItems(item, search, "course"))
          .filter((item) => filterByType(item, itemType))
          .map((item) => (
            <div key={item.id}>
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
            <div key={item.id}>
              <Link
                className={styles.linkToItem}
                onClick={handleLinkClick}
                to={`/events/${item.id}`}
              >
                <EventUI
                  event={item}
                  orientation={orientation as TOrientation}
                />
              </Link>
            </div>
          ))}
      </>
    );
  }

  if (type == "blog") {
    return (
      <>
        {(data as IBlogCard[]).slice(0, +limit).map((item) => (
          <div key={item.id}>
            <BlogCardUI card={item} />
          </div>
        ))}
      </>
    );
  }

  return <div>Неизвестная ошибка</div>;
};

export default ItemsList;
