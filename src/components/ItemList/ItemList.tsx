import EventUI, { TOrientation } from "@src/UI/Cards/Event/Event";
import clsx from "clsx";
import { FC, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@src/utils/hooks";
import { Link } from "react-router-dom";
import { handleLinkClick } from "@src/utils/helpers";
import CourseUI from "@src/UI/Cards/Course/Course";
import { ICourse, IEvent, TType } from "@src/utils/interfaces";

import styles from "./ItemList.module.scss";
import { fetchCourses } from "@src/store/slices/coursesSlice";
import { fetchEvents } from "@src/store/slices/eventsSlice";

interface IItemListProps {
  limit?: number;
  orientation?: TOrientation;
  search?: string;
  itemType?: TType;
  type?: "event" | "course";
  columns?: number;
}

const ItemsList: FC<IItemListProps> = ({
  limit = 9,
  orientation = "horizontal",
  search = "",
  type,
  columns = 3,
  itemType,
}) => {
  const dispatch = useAppDispatch();
  const { items, error, loading } = useAppSelector((state) =>
    type == "course" ? state.courses : state.events
  );

  const filterItems = (
    item: ICourse | IEvent,
    search: string,
    type?: string
  ) => {
    if (type == "event") {
      return (item as IEvent).text.title
        .toLowerCase()
        .includes(search.toLowerCase());
    } else if (type == "course") {
      return (item as ICourse).title
        .toLowerCase()
        .includes(search.toLowerCase());
    }
  };

  useEffect(() => {
    if (type == "course") {
      dispatch(fetchCourses());
    } else if (type == "event") {
      dispatch(fetchEvents());
    }
  }, []);

  if (error) {
    return <div>Error!</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className={clsx(styles[`item-${orientation}`])}
      style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
    >
      {type == "course"
        ? (items as ICourse[])
            .slice(0, +limit)
            .filter((item) => filterItems(item, search, "course"))
            .filter((item) => {
              if (itemType == "All" || !itemType) return item;

              return item.type == itemType;
            })
            .map((item) => (
              <div key={item.id}>
                <Link
                  className={styles.linkToItem}
                  onClick={handleLinkClick}
                  to={`/courses/${item.id}`}
                >
                  <CourseUI
                    course={item as ICourse}
                    orientation={orientation}
                  />
                </Link>
              </div>
            ))
        : (items as IEvent[])
            .slice(0, +limit)
            .filter((item) => filterItems(item, search, "event"))
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
    </div>
  );
};

export default ItemsList;
