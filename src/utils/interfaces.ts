import { HTMLInputTypeAttribute, ChangeEventHandler } from "react";

export interface IInputProps {
  settings?: {
    label?: {
      position?: "top" | "right";
      content?: string;
    };
    theme?: "light" | "dark";
    size?: "small" | "regular" | "large";
  };
  props?: {
    type?: HTMLInputTypeAttribute;
    name?: string;
    id?: string;
    placeholder?: string;
    onChange?: ChangeEventHandler;
  };
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
