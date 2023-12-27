import {
  BlogTabsTypeEnum,
  CourseTypeEnum,
  EventTypeEnum,
  IBlogCard,
  ICourse,
  IEvent,
} from "./interfaces";

export const firstLetterToUpperCase = (str: string) => {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
};

export const filterItems = (item: ICourse | IEvent, search: string, type?: string) => {
  if (type == "event") {
    return (item as IEvent).text.title.toLowerCase().includes(search.toLowerCase());
  } else if (type == "course") {
    return (item as ICourse).title.toLowerCase().includes(search.toLowerCase());
  }
};

export const filterByType = (
  item: ICourse | IEvent | IBlogCard,
  itemType?: CourseTypeEnum | EventTypeEnum | BlogTabsTypeEnum,
) => {
  if (
    itemType === EventTypeEnum.All ||
    itemType === CourseTypeEnum.All ||
    itemType === BlogTabsTypeEnum.All ||
    !itemType
  ) {
    return item;
  }

  return item.type.toLowerCase() == itemType.toLowerCase();
};

export const sortByTime = (
  a: IEvent | IBlogCard,
  b: IEvent | IBlogCard,
  sortBy: "Newest" | "Oldest",
) => {
  if ("text" in a && "text" in b) {
    if (sortBy == "Newest") return +getEventDate(b) - +getEventDate(a);
    if (sortBy == "Oldest") return +getEventDate(a) - +getEventDate(b);
  }

  if ("details" in a && "details" in b) {
    if (sortBy == "Newest") return +getBlogDate(b) - +getBlogDate(a);
    if (sortBy == "Oldest") return +getBlogDate(a) - +getBlogDate(b);
  }

  return 0;
};

export const handleLinkClick = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
};

export const handleSmoothLinkClick = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};

export const getEventDate = (item: IEvent) => {
  return new Date(
    `${item.date.month} ${item.date.day} ${item.date.time.toString().split(" ")[0]}`,
  );
};

const getBlogDate = (item: IBlogCard) => {
  return new Date(item.details.date);
};
