import { HTMLInputTypeAttribute, ChangeEventHandler } from "react";

export interface IInputProps {
  label?: {
    position?: "top" | "right";
    content?: string;
  };
  theme?: "light" | "dark";
  type?: HTMLInputTypeAttribute;
  name?: string;
  id?: string;
  size?: "small" | "regular" | "large";
  placeholder?: string;
  changeHandler?: ChangeEventHandler;
}
