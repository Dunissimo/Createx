import { CSSProperties, FC, ReactNode } from "react";

import styles from "./Block.module.scss";

interface IProps {
  children: ReactNode;
  flex?: boolean;
  width?: string;
  flexOption?: {
    direction?: "column" | "row";
    align?: "start" | "center" | "end";
    justify?: "start" | "center" | "end";
    gap?: string;
  };
  style?: CSSProperties;
}

const Block: FC<IProps> = ({
  children,
  flex,
  width = "100%",
  flexOption,
  style,
}) => {
  return (
    <div
      className={`${flex ? styles.flex : styles.block}`}
      style={{
        width,
        flexDirection: flexOption?.direction || "row",
        alignItems: flexOption?.align || "center",
        justifyContent: flexOption?.justify || "center",
        gap: flexOption?.gap || "",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Block;
