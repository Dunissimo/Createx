import CourseUI from "@src/UI/Cards/Course/Course";
import EventUI, { TOrientation } from "@src/UI/Cards/Event/Event";
import { useGetCoursesQuery } from "@src/api/courses";
import { useGetEventsQuery } from "@src/api/events";
import { filterByTheme, filterByType, filterItems, sortByTime } from "@src/utils/helpers";
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
import { CSSProperties, FC, ReactNode, useState } from "react";
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
  theme?: CourseTypeEnum;
}

interface IItemListProps extends ICommonProps {}

const ItemsList: FC<IItemListProps> = (props) => {
  const [isEmpty, setIsEmpty] = useState(false);

  const { orientation = "horizontal", type = "course", limit } = props;

  let queryResult;
  switch (type) {
    case "course":
      queryResult = useGetCoursesQuery();
      break;
    case "event":
      queryResult = useGetEventsQuery();
      break;
    case "blog":
      queryResult = useGetPostsQuery();
      break;
    case "team":
      queryResult = useGetTeamQuery();
  }

  const { data, isError, isLoading, isFetching } = queryResult;

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

  if (isLoading || isFetching) {
    return (
      <div className={clsx(styles.items, styles[`items-${orientation}`], styles[type])}>
        {new Array(limit || 9).fill(0).map((_, ind) => skeletons(type, ind))}
      </div>
    );
  }

  return (
    <div className={clsx(styles.items, styles[`items-${orientation}`], styles[type])}>
      {isEmpty ? <p>Hello</p> : <Item setEmpty={setIsEmpty} data={data} {...props} />}
    </div>
  );
};

interface IItemProps extends ICommonProps {
  data?: Array<CardsTypes>;
  style?: CSSProperties;
  setEmpty: React.Dispatch<React.SetStateAction<boolean>>;
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
  theme,
  setEmpty,
}) => {
  const components = (item: CardsTypes) => ({
    course: <CourseUI course={item as ICourse} orientation={orientation} />,
    event: <EventUI event={item as IEvent} orientation={orientation as TOrientation} />,
    blog: <BlogCardUI card={item as IBlogCard} />,
    team: <TeamUI team={item as ITeam} />,
  });

  const renderItems = (data?: Array<CardsTypes>, type?: CommonType): ReactNode[] => {
    if (!data || !type) return [];

    return data
      .slice(0, Number(limit))
      .filter((item) => {
        if (!item || !itemType) return true;

        return filterByType(item, itemType);
      })
      .filter((item) => {
        if (!item || !itemType) return true;

        return filterByTheme(item, theme || CourseTypeEnum.All);
      })
      .sort((a, b) => {
        if (!sortBy) return 0;

        return sortByTime(a, b, sortBy);
      })
      .filter((item) => {
        if (!item || !search) return true;

        return filterItems(item, search, type);
      })
      .map((item) => (
        <div key={item.id} style={style}>
          {components(item)[type]}
        </div>
      ));
  };

  const res = renderItems(data || [], type || "course");

  return <>{res.length > 0 ? res : <p className={styles.error}>Nothing was found</p>}</>;
};

export default ItemsList;
