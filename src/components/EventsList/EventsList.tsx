import { FC, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchEvents } from "@redux/slices/eventsSlice";
import { useAppDispatch, useAppSelector } from "@utils/hooks";
import EventUI from "@ui/Cards/Event/Event";

import styles from "./EventsList.module.scss";

interface IProps {
  limit?: string | number;
}

const EventsList: FC<IProps> = ({ limit = 3 }) => {
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
    <div className={styles.list}>
      {loading && <div>Loading...</div>}
      {events.slice(0, +limit).map((event) => (
        <div key={event.id}>
          <Link className={styles.linkToEvent} to={`/courses/${event.id}`}>
            <EventUI event={event} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default EventsList;
