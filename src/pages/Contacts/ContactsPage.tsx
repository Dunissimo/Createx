import Row from "@src/UI/Row/Row";
import RowItem from "@src/UI/Row/RowItem/RowItem";
import Title from "@src/UI/Title/Title";
import Navbar from "@src/components/Navbar/Navbar";
import { FC } from "react";

const ContactsPage: FC = () => {
  return (
    <section>
      <Navbar />

      {/* contact info */}
      <div
        className="container contactInfo"
        style={{ marginTop: "80px", marginBottom: "180px" }}
      >
        <Row>
          <RowItem>
            <Title>
              <h2>Contact info</h2>
              <h3>Get in touch</h3>
            </Title>
          </RowItem>
          {/* <RowItem></RowItem> */}
        </Row>
      </div>

      {/* questions */}
    </section>
  );
};

export default ContactsPage;
