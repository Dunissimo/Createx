import { IStepData } from "@src/utils/interfaces";
import { FC } from "react";
import Step from "./Step/Step";

import clsx from "clsx";
import styles from "./Steps.module.scss";

export type TStepType = "horizontal" | "vertical";

interface IProps {
  data: IStepData[];
  type?: TStepType;
}

const Steps: FC<IProps> = ({ data, type = "horizontal" }) => {
  return (
    <div className={clsx(type == "horizontal" ? styles.steps : styles.stepsVertical)}>
      {data.map((step, index) => (
        <Step
          key={index}
          data={step}
          index={index + 1}
          type={type}
          isLast={index == data.length - 1}
        />
      ))}
    </div>
  );
};

export default Steps;
