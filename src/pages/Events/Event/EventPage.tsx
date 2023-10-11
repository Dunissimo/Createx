import Title from "@src/UI/Title/Title";
import Navbar from "@src/components/Navbar/Navbar";
import { FC } from "react";

const EventPage: FC = () => {
  return (
    <section>
      <header style={{ background: "#ffdad5" }}>
        <Navbar />

        <Title align="center" style={{ padding: "120px 0" }}>
          {/* event type */}
          <h2 style={{ color: "#FF3F3A" }}>Online lecture</h2>

          <h3 style={{ color: "#1e212c", maxWidth: "75%", margin: "0 auto" }}>
            Formation of the organizational structure of the company in the face
            of uncertainty
          </h3>
        </Title>
      </header>
    </section>
  );
};

export default EventPage;
