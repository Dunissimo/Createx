import { FC } from "react";
import clsx from "clsx";
import { Link, useSearchParams } from "react-router-dom";
import Input from "@src/UI/Form/Input/Input";
import Select from "@src/UI/Form/Select/Select";

import styles from "./EventsToolbox.module.scss";

import grid from "@assets/icons/grid-tool.svg";
import list from "@assets/icons/list-tool.svg";
import gridActive from "@assets/icons/grid-tool-active.svg";
import listActive from "@assets/icons/list-tool-active.svg";

const EventsToolbox: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const orientation = searchParams.get("orientation") || "horizontal";
  const perPage = searchParams.get("perPage") || 9;
  const search = searchParams.get("search") || "";
  const type = searchParams.get("type") || "All";
  const sortBy = searchParams.get("sortBy") || "Newest";

  return (
    <div className={styles.toolbox}>
      <div className={styles.toolboxItem}>
        <label htmlFor="themes">Event category</label>

        <Select
          id="themes"
          defaultValue="All themes"
          values={["All", "Online master-class", "Online lecture", "Online workshop"]}
          onChange={(e) => {
            setSearchParams({
              orientation,
              perPage: String(perPage),
              search,
              type: e.target.value,
              sortBy,
            });
          }}
        />
      </div>

      <div className={styles.toolboxItem}>
        <label htmlFor="sortBy">Sort by</label>

        <Select
          id="sortBy"
          style={{ minWidth: "150px" }}
          defaultValue="Newest"
          values={["Newest", "Oldest"]}
          onChange={(e) => {
            setSearchParams({
              orientation,
              perPage: String(perPage),
              search,
              type,
              sortBy: e.target.value,
            });
          }}
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
            setSearchParams({
              orientation,
              perPage: e.target.value,
              search,
              type,
              sortBy,
            });
          }}
        />

        <span>events per page</span>
      </div>

      <div className={styles.toolboxItem}>
        <Input
          image="search"
          placeholder="Search event..."
          value={searchParams.get("search") || ""}
          onChange={(e) =>
            setSearchParams({
              orientation,
              perPage: String(perPage),
              search: e.target.value,
              type,
              sortBy,
            })
          }
        />
      </div>

      <div className={clsx(styles.toolboxItem, styles.changeView)}>
        <Link
          to={`/events?orientation=vertical&perPage=${perPage}&search=${search}&type=${type}&sortBy=${sortBy}`}
        >
          <img src={orientation == "horizontal" ? grid : gridActive} alt="" />
        </Link>

        <Link
          to={`/events?orientation=horizontal&perPage=${perPage}&search=${search}&type=${type}&sortBy=${sortBy}`}
        >
          <img src={orientation == "vertical" ? list : listActive} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default EventsToolbox;
