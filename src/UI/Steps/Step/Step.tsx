import { FC } from "react";
import { IStepData } from "@src/utils/interfaces";
import { TStepType } from "../Steps";

import styles from "./Step.module.scss";
import clsx from "clsx";

interface IProps {
  data: IStepData;
  index: number;
  type: TStepType;
  isLast?: boolean;
}

const Step: FC<IProps> = ({ data, index, type, isLast = false }) => {
  return (
    <div
      className={clsx(
        type == "horizontal" ? styles.step : styles.stepVertical,
        isLast && styles.finalStep
      )}
    >
      {type == "horizontal" ? (
        <>
          <h4>Step {index}</h4>
          <h3>{data.head}</h3>
          <p>{data.p}</p>
        </>
      ) : (
        <>
          <h3>0{index}</h3>
          <h4>{data.head}</h4>
          <p>{data.p}</p>
        </>
      )}
    </div>
  );
};

export default Step;
