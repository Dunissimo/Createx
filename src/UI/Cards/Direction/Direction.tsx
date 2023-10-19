import { CSSProperties, FC } from "react";

import { IDirectionData } from "@utils/interfaces";
import { useUrl } from "@utils/hooks";
import Button from "@ui/Button/Button";
import Type from "@ui/Type/Type";

import styles from "./Direction.module.scss";

import left from "@assets/icons/arrow-red.svg";
import clsx from "clsx";

interface IProps {
  directionData?: IDirectionData;
  isEmpty?: boolean;
  width?: string;
  style?: CSSProperties;
}

const Direction: FC<IProps> = ({ isEmpty, width, directionData, style }) => {
  if (isEmpty) {
    return (
      <div
        className={clsx(styles.direction, styles.empty)}
        style={{ width, ...style }}
      >
        New studying program <br /> coming soon...
      </div>
    );
  }

  const { imgUrlWithExtension, type, paragraph, button } = directionData!;

  const url = useUrl(imgUrlWithExtension!);

  return (
    <div className={styles.direction} style={{ width, ...style }}>
      <img className={styles.dirMainImg} src={url} alt="" />
      <div className={styles.dirInfo}>
        <Type type={type} />
        <p>{paragraph}</p>
        <Button simple className={styles.btn}>
          {button}
          <img src={left} alt="" />
        </Button>
      </div>
    </div>
  );
};

export default Direction;
