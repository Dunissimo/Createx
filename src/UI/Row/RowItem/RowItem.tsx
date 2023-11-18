import { CSSProperties, FC, ReactNode } from "react";
import clsx from "clsx";

import style from "./RowItem.module.scss";

interface IProps {
  children: ReactNode;
  styles?: CSSProperties;
  className?: string;
  contentPosition?: "start" | "center" | "end";
  contentAlign?: "start" | "center" | "end";
  width?: string;
}

const RowItem: FC<IProps> = ({
  children,
  styles,
  className,
  contentPosition,
  contentAlign,
  width = "50%",
}) => {
  return (
    <div
      className={clsx(
        style.item,
        className,
        style[contentPosition!],
        style["j-" + contentAlign!],
      )}
      style={{ width, ...styles }}
    >
      {children}
    </div>
  );
};

export default RowItem;
