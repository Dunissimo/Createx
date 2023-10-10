import { TOrientation } from "@src/UI/Cards/Event/Event";
import Title from "@src/UI/Title/Title";
import EventsList from "@src/components/EventsList/EventsList";
import Navbar from "@src/components/Navbar/Navbar";
import Subscribe from "@src/components/Subscribe/Subscribe";
import Toolbox from "@src/components/Toolbox/Toolbox";
import { useQuery } from "@src/utils/hooks";
import { FC } from "react";

const EventsPage: FC = () => {
  const query = useQuery();
  const orientation = query.get("orientation");

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
        <EventsList limit={9} orientation={orientation as TOrientation} />
      </div>

      {/* ToolBar */}

      {/* EventsList */}

      <Subscribe />
    </section>
  );
};

export default EventsPage;
