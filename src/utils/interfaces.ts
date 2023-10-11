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

export type TType =
  | "Marketing"
  | "Management"
  | "Recruting"
  | "Design"
  | "Development";

export interface ICourse {
  id: number | string;
  type: TType;
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
    p: string;
  };
  button: string;
}

export interface IDirectionData {
  imgUrlWithExtension: string;
  type: TType;
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
    theme: TType;
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
