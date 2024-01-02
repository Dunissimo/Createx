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
  ITeam,
} from "@src/utils/interfaces";
import clsx from "clsx";
import { CSSProperties, FC } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

import BlogCardUI from "@src/UI/Blog/BlogCard/BlogCard";
import Team from "@src/UI/Team/Team";
import { useGetPostsQuery } from "@src/api/posts";
import { useGetTeamQuery } from "@src/api/team";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "./ItemList.module.scss";

export type CommonType = "event" | "course" | "blog" | "team";
export type CardsTypes = ICourse | IEvent | IBlogCard | ITeam;

interface ICommonProps {
  limit?: number;
  orientation?: TOrientation;
  search?: string;
  itemType?: CourseTypeEnum | EventTypeEnum | BlogTabsTypeEnum;
  type?: CommonType;
  sortBy?: "Newest" | "Oldest";
}

interface IItemListProps extends ICommonProps {}

const ItemsList: FC<IItemListProps> = (props) => {
  const { orientation = "horizontal", type = "course", limit } = props;

  const { data, isError, isLoading, isFetching } =
    type == "course"
      ? useGetCoursesQuery()
      : type == "event"
        ? useGetEventsQuery()
        : type == "blog"
          ? useGetPostsQuery()
          : useGetTeamQuery();

  if (isError) {
    return <div>Error!</div>;
  }

  const skeletons = (ind: number) => ({
    course: (
      <div key={ind}>
        <Skeleton count={1} width={"100%"} height={200} />
      </div>
    ),
    event: <Skeleton count={1} width={"80vw"} height={200} />,
    blog: (
      <div key={ind}>
        <Skeleton count={1} width={"100%"} height={500} />,
      </div>
    ),
    team: (
      <div key={ind}>
        <Skeleton baseColor="#dee1e3" highlightColor="#ebeef0" count={1} height={300} />
      </div>
    ),
  });

  return (
    <div className={clsx(styles.items, styles[`items-${orientation}`], styles[type])}>
      {isLoading || isFetching ? (
        new Array(limit || 9).fill(0).map((_, ind) => skeletons(ind)[type])
      ) : (
        <Item data={data} {...props} />
      )}
    </div>
  );
};

interface IItemProps extends ICommonProps {
  data?: Array<CardsTypes>;
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
  const components = (item: CardsTypes) => ({
    course: <CourseUI course={item as ICourse} orientation={orientation} />,
    event: <EventUI event={item as IEvent} orientation={orientation as TOrientation} />,
    blog: <BlogCardUI card={item as IBlogCard} />,
    team: <Team team={item as ITeam} />,
  });

  const renderItems = (data?: Array<CardsTypes>, type?: CommonType) => {
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
