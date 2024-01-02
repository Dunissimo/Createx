import { CardsTypes } from "@src/components/ItemList/ItemList";
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

export const filterItems = (item: CardsTypes, search: string, type?: string) => {
  if (type == "event") {
    return (item as IEvent).text.title.toLowerCase().includes(search.toLowerCase());
  } else if (type == "course") {
    return (item as ICourse).title.toLowerCase().includes(search.toLowerCase());
  } else if (type == "blog") {
    return (item as IBlogCard).title.toLowerCase().includes(search.toLowerCase());
  }
};

export const filterByType = (
  item: CardsTypes,
  itemType?: CourseTypeEnum | EventTypeEnum | BlogTabsTypeEnum,
) => {
  if (
    // При фильтре "все" нам не нужно фильтровать
    itemType === EventTypeEnum.All ||
    itemType === CourseTypeEnum.All ||
    itemType === BlogTabsTypeEnum.All ||
    !itemType ||
    // Так как нам также не нужно фильтровать ITeam, то прерываем выполнение функции
    "job" in item
  ) {
    return item;
  }

  return item.type.toLowerCase() == itemType.toLowerCase();
};

export const sortByTime = (a: CardsTypes, b: CardsTypes, sortBy: "Newest" | "Oldest") => {
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
