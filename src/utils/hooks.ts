import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "@redux/store";
import notFound from "@assets/imgNotFound.svg";

export const useUrl = (url: string) => {
  if (/undefined/.test(new URL(`../assets/${url}`, import.meta.url).href)) {
    return notFound;
  } else {
    return new URL(`../assets/${url}`, import.meta.url).href;
  }
};

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
