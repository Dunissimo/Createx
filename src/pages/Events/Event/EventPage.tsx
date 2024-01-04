import Accordion from "@src/UI/Accordion/Accordion";
import Button from "@src/UI/Button/Button";
import { Info, InfoItem } from "@src/UI/Cards/Info/Info";
import Row from "@src/UI/Row/Row";
import RowItem from "@src/UI/Row/RowItem/RowItem";
import Title from "@src/UI/Title/Title";
import { useGetEventContentQuery } from "@src/api/events";
import Navbar from "@src/components/Navbar/Navbar";
import Person from "@src/components/Person/Person";
import { ISpeaker } from "@src/utils/interfaces";
import { FC } from "react";
import Skeleton from "react-loading-skeleton";
import { Link, useParams } from "react-router-dom";
import styles from "./EventPage.module.scss";

import speakerImg from "@assets/team/speaker-image.svg";

const EventPage: FC = () => {
  const { id } = useParams();
  const { data: eventContent, isLoading } = useGetEventContentQuery(Number(id));
  const { themes, info, speaker, listForWhom } = eventContent?.data || {};

  return (
    <section>
      <header style={{ background: "#ffdad5" }}>
        <Navbar />

        <Title className={styles.title} align="center">
          <h2 style={{ color: "#FF3F3A" }}>Online lecture</h2>

          <h3 style={{ color: "#1e212c", maxWidth: "75%", margin: "0 auto" }}>
            Formation of the organizational structure of the company in the face of
            uncertainty
          </h3>
        </Title>
      </header>

      <div className={styles.talkAbout}>
        <div className="container">
          <Row>
            <RowItem className={styles.talkAboutLeft}>
              <h2>We will talk about:</h2>

              {isLoading
                ? new Array(4)
                    .fill(0)
                    .map((_, index) => <Skeleton key={index} height={60} />)
                : themes?.map(({ numberOfItem, head, text }, i) => (
                    <Accordion
                      className={styles.accord}
                      key={i}
                      head={
                        <>
                          <span
                            style={{
                              color: "#ff3f3a",
                              marginRight: "10px",
                            }}
                          >
                            {numberOfItem}
                          </span>
                          {head}
                        </>
                      }
                    >
                      <p style={{ color: "#424551" }}>{text}</p>
                    </Accordion>
                  ))}
            </RowItem>

            <RowItem className={styles.talkAboutRight}>
              <Info className={styles.talkAboutInfo}>
                <InfoItem
                  subtitle="Time"
                  title={info?.date}
                  par="Metus turpis sit lorem lacus, in elit tellus lacus."
                />

                <InfoItem
                  subtitle="Price"
                  title={info?.price}
                  par="Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris quam ac elit tristique dis."
                />

                <Link to="#">EVENT ON FACEBOOK</Link>

                <Button isFullWidth>Join the event</Button>
              </Info>
            </RowItem>
          </Row>
        </div>
      </div>

      <div className={styles.speaker}>
        {/* TODO: поменять данные speaker */}
        <Person isLoading={isLoading} person={speaker as ISpeaker} imgLink={speakerImg} />
      </div>

      <section className={styles.forWhom}>
        <div className="container">
          <Row className={styles.forWhomRow}>
            <RowItem>
              <Title style={{ color: "#1e212c" }}>
                <h2>For whom?</h2>
                <h3>
                  Who will benefit from <br /> the course:
                </h3>
              </Title>
            </RowItem>

            <RowItem>
              <ul className={styles.whomList}>
                {isLoading
                  ? new Array(5)
                      .fill(0)
                      .map((_, index) => <Skeleton key={index} height={30} />)
                  : listForWhom?.map((item, key) => <li key={key}>{item}</li>)}
              </ul>
            </RowItem>
          </Row>
        </div>
      </section>

      <div className="news"></div>

      <div className="request"></div>

      {/* <div className="checkOther"></div> */}
    </section>
  );
};

export default EventPage;
