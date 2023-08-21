import { CSSProperties, FC, ReactNode } from "react";

import style from "./RowItem.module.scss";
import clsx from "clsx";

interface IProps {
  children: ReactNode;
  styles?: CSSProperties;
  className?: string;
}

const RowItem: FC<IProps> = ({ children, styles, className }) => {
  return (
    <div className={clsx(style.item, className)} style={styles}>
      {children}
    </div>
  );
};

export default RowItem;
