import {
  HTMLInputTypeAttribute,
  ChangeEventHandler,
  CSSProperties,
  HTMLAttributes,
  InputHTMLAttributes,
  DetailedHTMLProps,
} from "react";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  theme?: "light" | "dark";
  variant?: "small" | "regular" | "large";
}

export enum CourseTypeEnum {
  All = "All",
  Marketing = "Marketing",
  Management = "Management",
  Recruting = "Recruting",
  Design = "Design",
  Development = "Development",
}

export enum EventTypeEnum {
  All = "All",
  MasterClass = "Online master-class",
  Lecture = "Online lecture",
  Workshop = "Online workshop",
}

export interface ICourse {
  id: number | string;
  type: CourseTypeEnum;
  title: string;
  price: string | number;
  author: string;
  imgName: string;
}

export interface IEvent {
  id: number | string;
  date: {
    day: number | string;
    month: number | string;
    time: number | string;
  };
  text: {
    title: string;
  };
  type: EventTypeEnum;
}

export interface IDirectionData {
  imgUrlWithExtension: string;
  type: CourseTypeEnum;
  paragraph: string;
  button: string;
}

export interface ITeam {
  imgName: string;
  name: string;
  job: string;
  id: number;
}

export interface IBlogCard {
  type: "podcast" | "article" | "video";
  imgName: string;
  details: {
    theme: CourseTypeEnum;
    date: string;
    duration: string;
  };
  title: string;
  p: string;
  id: number;
}

export interface IStepData {
  title: string;
  par: string;
}
