import CourseUI from "@src/UI/Cards/Course/Course";
import EventUI, { TOrientation } from "@src/UI/Cards/Event/Event";
import { useGetCoursesQuery } from "@src/api/courses";
import { useGetEventsQuery } from "@src/api/events";
import { filterByType, filterItems, sortByTime } from "@src/utils/helpers";
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

import BlogCardUI from "@src/UI/Blog/BlogCard/BlogCard";
import TeamUI from "@src/UI/Team/Team";
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

  const skeletons = (type: CommonType, ind: number) => {
    switch (type) {
      case "event":
      case "course":
        return (
          <div key={ind}>
            <Skeleton count={1} width={"100%"} height={200} />
          </div>
        );

      case "blog":
        return (
          <div key={ind}>
            <Skeleton count={1} width={"100%"} height={500} />,
          </div>
        );

      case "team":
        return (
          <div key={ind}>
            <Skeleton
              baseColor="#dee1e3"
              highlightColor="#ebeef0"
              count={1}
              height={300}
            />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={clsx(styles.items, styles[`items-${orientation}`], styles[type])}>
      {isLoading || isFetching ? (
        new Array(limit || 9).fill(0).map((_, ind) => skeletons(type, ind))
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
    team: <TeamUI team={item as ITeam} />,
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
          {components(item)[type]}
        </div>
      ));
  };

  return <>{renderItems(data || [], type || "course")}</>;
};

export default ItemsList;
