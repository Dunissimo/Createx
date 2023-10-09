import Title from "@src/UI/Title/Title";
import Navbar from "@src/components/Navbar/Navbar";
import Subscribe from "@src/components/Subscribe/Subscribe";
import { FC } from "react";

const EventsPage: FC = () => {
  return (
    <section>
      <Navbar />

      <Title align="center" style={{ margin: "80px 0 60px 0" }}>
        <h2 style={{ color: "#FF3F3A" }}>Our Events</h2>

        <h3 style={{ color: "#1e212c" }}>
          Lectures, workshops & master-classes
        </h3>
      </Title>

      {/* ToolBar */}

      {/* EventsList */}

      <Subscribe />
    </section>
  );
};

export default EventsPage;
