import { FC } from "react";
import Title from "@src/UI/Title/Title";
import EventsList from "@src/components/EventsList/EventsList";
import Navbar from "@src/components/Navbar/Navbar";
import Subscribe from "@src/components/Subscribe/Subscribe";
import Toolbox from "@src/components/Toolbox/Toolbox";
import { useSearchParams } from "react-router-dom";
import { TOrientation } from "@src/UI/Cards/Event/Event";

const EventsPage: FC = () => {
  const [searchParams] = useSearchParams();
  const limit = searchParams.get("perPage") || 9;
  const orientation = searchParams.get("orientation") || "horizontal";
  const search = searchParams.get("search") || "";

  return (
    <section>
      <Navbar />

      <Title align="center" style={{ margin: "80px 0 60px 0" }}>
        <h2 style={{ color: "#FF3F3A" }}>Our Events</h2>

        <h3 style={{ color: "#1e212c" }}>
          Lectures, workshops & master-classes
        </h3>
      </Title>

      <Toolbox />

      <div
        style={{ marginTop: "60px", marginBottom: "180px", padding: "0 1rem" }}
      >
        {/* Пока оставлю так, когда добавлю пагинацию, надо будет использовать чуток по другому */}
        <EventsList
          limit={+limit}
          orientation={orientation as TOrientation}
          search={search}
        />
      </div>

      <Subscribe />
    </section>
  );
};

export default EventsPage;
