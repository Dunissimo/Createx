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
