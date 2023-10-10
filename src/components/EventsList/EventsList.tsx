import { FC, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchEvents } from "@redux/slices/eventsSlice";
import { useAppDispatch, useAppSelector } from "@utils/hooks";
import EventUI, { TOrientation } from "@ui/Cards/Event/Event";

import styles from "./EventsList.module.scss";
import { handleNavLinkClick } from "@src/utils/helpers";
import clsx from "clsx";

interface IProps {
  limit?: string | number;
  orientation?: TOrientation;
}

const EventsList: FC<IProps> = ({ limit = 3, orientation = "horizontal" }) => {
  const dispatch = useAppDispatch();
  const { events, error, loading } = useAppSelector((state) => state.events);

  useEffect(() => {
    dispatch(fetchEvents());
  }, []);
  // TODO: переписать useEffect на RTK Query || axios

  if (error) {
    return <h1>Error!</h1>;
  }

  return (
    <div
      className={clsx(orientation == "horizontal" ? styles.list : styles.grid)}
    >
      {loading && <div>Loading...</div>}
      {events.slice(0, +limit).map((event) => (
        <div key={event.id}>
          <Link
            className={styles.linkToEvent}
            onClick={handleNavLinkClick}
            to={`/events/${event.id}`}
          >
            <EventUI event={event} orientation={orientation} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default EventsList;
