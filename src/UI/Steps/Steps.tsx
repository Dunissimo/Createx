import { IStepData } from "@src/utils/interfaces";
import { FC } from "react";
import Step from "./Step/Step";

import styles from "./Steps.module.scss";

interface IProps {
  data: IStepData[];
}

const Steps: FC<IProps> = ({ data }) => {
  return (
    <div className={styles.steps}>
      {data.map((step, index) => (
        <Step data={step} index={index + 1} />
      ))}
    </div>
  );
};

export default Steps;
