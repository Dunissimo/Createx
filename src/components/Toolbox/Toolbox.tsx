import { FC } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import Input from "@src/UI/Form/Input/Input";
import { useQuery } from "@src/utils/hooks";

import styles from "./Toolbox.module.scss";

import grid from "@assets/icons/grid-tool.svg";
import list from "@assets/icons/list-tool.svg";
import gridActive from "@assets/icons/grid-tool-active.svg";
import listActive from "@assets/icons/list-tool-active.svg";

const Toolbox: FC = () => {
  const query = useQuery();
  const orientation = query.get("orientation");

  return (
    <div className="container">
      <div className={styles.toolbox}>
        {/* TODO: сделать select */}
        <div className={styles.toolboxItem}>
          <label htmlFor="">Event category</label>

          <Input />
        </div>

        {/* TODO: сделать select */}
        <div className={styles.toolboxItem}>
          <label htmlFor="">Sort by</label>

          <Input />
        </div>

        <div className={styles.toolboxItem}>
          <label htmlFor="">Show</label>

          <Input
            min={0}
            max={100}
            defaultValue={9}
            type="number"
            className={styles.inputNumber}
          />

          <span>event per page</span>
        </div>

        <div className={styles.toolboxItem}>
          <Input placeholder="Search event..." />
        </div>

        <div className={clsx(styles.toolboxItem, styles.changeView)}>
          <Link to={"/events?orientation=vertical"}>
            <img src={orientation == "horizontal" ? grid : gridActive} alt="" />
          </Link>

          <Link to={"/events?orientation=horizontal"}>
            <img src={orientation == "vertical" ? list : listActive} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Toolbox;
