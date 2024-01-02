import { TOrientation } from "@src/UI/Cards/Event/Event";
import Title from "@src/UI/Title/Title";
import EventsToolbox from "@src/components/EventsToolbox/EventsToolbox";
import ItemsList from "@src/components/ItemList/ItemList";
import Navbar from "@src/components/Navbar/Navbar";
import Subscribe from "@src/components/Subscribe/Subscribe";
import { EventTypeEnum } from "@src/utils/interfaces";
import { FC } from "react";
import { useSearchParams } from "react-router-dom";

const EventsPage: FC = () => {
  const [searchParams] = useSearchParams();
  const limit = searchParams.get("perPage") || 9;
  const orientation = searchParams.get("orientation") || "horizontal";
  const search = searchParams.get("search") || "";
  const type = searchParams.get("type") || "";
  const sortBy = searchParams.get("sortBy") || "";

  return (
    <section>
      <Navbar />

      <div className="container">
        <Title align="center" style={{ margin: "80px 0 60px 0" }}>
          <h2 style={{ color: "#FF3F3A" }}>Our Events</h2>

          <h3 style={{ color: "#1e212c" }}>Lectures, workshops & master-classes</h3>
        </Title>

        <EventsToolbox />

        <div
          style={{
            marginTop: "60px",
            marginBottom: "180px",
          }}
        >
          {/* Пока оставлю так, когда добавлю пагинацию, надо будет использовать чуток по другому */}
          <ItemsList
            type="event"
            limit={+limit}
            orientation={orientation as TOrientation}
            search={search}
            itemType={type as EventTypeEnum}
            sortBy={sortBy as "Newest" | "Oldest"}
          />
        </div>
      </div>

      <Subscribe />
    </section>
  );
};

export default EventsPage;
