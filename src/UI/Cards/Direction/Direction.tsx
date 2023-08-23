import { FC } from "react";

import { IDirectionData } from "@utils/interfaces";
import { useUrl } from "@utils/hooks";
import Button from "@ui/Button/Button";
import Type from "@ui/Type/Type";

import styles from "./Direction.module.scss";

import left from "@assets/icons/arrow-red.svg";

interface IProps {
  directionData: IDirectionData;
}

const Direction: FC<IProps> = ({ directionData }) => {
  const { imgUrlWithExtension, type, paragraph, button } = directionData;

  const url = useUrl(imgUrlWithExtension);

  return (
    <div className={styles.direction}>
      <img className={styles.dirMainImg} src={url} alt="" />
      <div className={styles.dirInfo}>
        <Type type={type} />
        <p>{paragraph}</p>
        <Button settings={{ simple: true }} props={{ className: styles.btn }}>
          {button}
          <img src={left} alt="" />
        </Button>
      </div>
    </div>
  );
};

export default Direction;
