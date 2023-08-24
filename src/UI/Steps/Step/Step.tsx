import { IStepData } from "@src/utils/interfaces";
import { FC } from "react";

import styles from "./Step.module.scss";

interface IProps {
  data: IStepData;
  index: number;
}

const Step: FC<IProps> = ({ data, index }) => {
  return (
    <div className={styles.step}>
      <h4>Step {index}</h4>
      <h3>{data.title}</h3>
      <p>{data.par}</p>
    </div>
  );
};

export default Step;
