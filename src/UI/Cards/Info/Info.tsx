import { FC, ReactNode } from "react";
import Skeleton from "react-loading-skeleton";

import clsx from "clsx";
import styles from "./Info.module.scss";

interface IInfoProps {
  isLoading?: boolean;
  children: ReactNode;
  className?: string;
}

export const Info: FC<IInfoProps> = ({ isLoading, children, className }) => {
  return isLoading ? (
    <Skeleton height={500} />
  ) : (
    <div className={clsx(styles.info, className)}>{children}</div>
  );
};

interface IInfoItemProps {
  subtitle?: ReactNode;
  title?: ReactNode;
  par?: ReactNode;
}

export const InfoItem: FC<IInfoItemProps> = ({ subtitle, title, par }) => {
  return (
    <div className={styles.infoItem}>
      <h3>{subtitle}</h3>
      <h2>{title}</h2>
      <p>{par}</p>
    </div>
  );
};
