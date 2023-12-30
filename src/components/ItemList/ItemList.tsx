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

type CommonType = "event" | "course" | "blog";

interface ICommonProps {
  limit?: number;
  orientation?: TOrientation;
  search?: string;
  itemType?: CourseTypeEnum | EventTypeEnum | BlogTabsTypeEnum;
  type?: CommonType;
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
    <div className={clsx(styles[`items-${orientation}`], styles[`items-${type}`])}>
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

const paths = {
  events: "/events",
  courses: "/courses",
  blog: "/blog",
};

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
  const components = (item: IBlogCard | ICourse | IEvent) => ({
    course: <CourseUI course={item as ICourse} orientation={orientation} />,
    event: <EventUI event={item as IEvent} orientation={orientation as TOrientation} />,
    blog: <BlogCardUI card={item as IBlogCard} />,
  });

  const renderItems = (data?: Array<ICourse | IEvent | IBlogCard>, type?: CommonType) => {
    if (!data || !type) return <div>Ошибка</div>;

    return data
      .slice(0, Number(limit))
      .filter((item) => {
        if (!item || !search) return true;

        return filterItems(item, search, type);
      })
      .filter((item) => {
        if (!item || !itemType) return true;

        return filterByType(item, itemType);
      })
      .sort((a, b) => {
        if (!sortBy) return 0;

        return sortByTime(a, b, sortBy);
      })
      .map((item) => (
        <div key={item.id} style={style}>
          <Link
            className={styles.linkToItem}
            onClick={handleLinkClick}
            to={`${paths[type as keyof typeof paths]}/${item.id}`}
          >
            {components(item)[type]}
          </Link>
        </div>
      ));
  };

  return <>{renderItems(data || [], type || "course")}</>;
};

export default ItemsList;
