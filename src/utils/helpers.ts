import { ICourse, IEvent, EventTypeEnum, CourseTypeEnum } from "./interfaces";

export const filterItems = (
  item: ICourse | IEvent,
  search: string,
  type?: string
) => {
  if (type == "event") {
    return (item as IEvent).text.title
      .toLowerCase()
      .includes(search.toLowerCase());
  } else if (type == "course") {
    return (item as ICourse).title.toLowerCase().includes(search.toLowerCase());
  }
};

export const filterByType = (
  item: any,
  itemType?: CourseTypeEnum | EventTypeEnum
) => {
  if (itemType == EventTypeEnum.All || !itemType) return item;

  return item.type == itemType;
};

export const sortByTime = (
  a: IEvent,
  b: IEvent,
  sortBy: "Newest" | "Oldest"
) => {
  if (sortBy == "Newest") return +getDate(b) - +getDate(a);
  if (sortBy == "Oldest") return +getDate(a) - +getDate(b);
  else return 0;
};

export const handleLinkClick = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
};

export const handleSmoothLinkClick = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};

export const getDate = (item: any) => {
  return new Date(
    `${item.date.month} ${item.date.day} ${item.date.time.split(" ")[0]}`
  );
};
