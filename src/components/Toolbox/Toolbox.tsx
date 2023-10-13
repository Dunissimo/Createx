import { ChangeEventHandler, FC, useEffect, useState } from "react";
import clsx from "clsx";
import { Link, useSearchParams } from "react-router-dom";
import Input from "@src/UI/Form/Input/Input";

import styles from "./Toolbox.module.scss";

import grid from "@assets/icons/grid-tool.svg";
import list from "@assets/icons/list-tool.svg";
import gridActive from "@assets/icons/grid-tool-active.svg";
import listActive from "@assets/icons/list-tool-active.svg";
import Select from "@src/UI/Form/Select/Select";

const Toolbox: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const orientation = searchParams.get("orientation") || "";
  const perPage = searchParams.get("perPage") || 9;
  const search = searchParams.get("Search") || "";

  const onChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setSearchParams({ type: e.target.value || "" });

    console.log(searchParams.get("type"));
  };

  return (
    <div className={styles.toolbox}>
      <div className={styles.toolboxItem}>
        <label htmlFor="themes">Event category</label>

        <Select
          id="themes"
          defaultValue="All themes"
          values={[
            "All",
            "Online master-class",
            "Online lecture",
            "Online workshop",
          ]}
          onChange={onChange}
        />
      </div>

      <div className={styles.toolboxItem}>
        <label htmlFor="sortBy">Sort by</label>

        <Select
          id="sortBy"
          style={{ minWidth: "150px" }}
          defaultValue="Newest"
          values={["Newest", "Oldest"]}
          onChange={onChange}
        />
      </div>

      <div className={styles.toolboxItem}>
        <label htmlFor="inputNumber">Show</label>

        <Input
          className={styles.inputNumber}
          id="inputNumber"
          type="number"
          min={0}
          max={100}
          value={searchParams.get("perPage") || 9}
          onChange={(e) => {
            setSearchParams({ orientation, perPage: e.target.value });
          }}
        />

        <span>events per page</span>
      </div>

      {/* TODO: сделать иконку поиска  */}
      <div className={styles.toolboxItem}>
        <Input
          placeholder="Search event..."
          value={searchParams.get("search") || ""}
          onChange={(e) =>
            setSearchParams({
              orientation,
              perPage: String(perPage),
              search: e.target.value,
            })
          }
        />
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
  );
};

export default Toolbox;
