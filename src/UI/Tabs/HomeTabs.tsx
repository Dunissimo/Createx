import { FC, MouseEventHandler, ReactNode, useState } from "react";
import Tab from "./Tab";
import Row from "../Row/Row";

import styles from "./Tab.module.scss";

import chat from "../../assets/tab/chat.svg";
import like from "../../assets/tab/like.svg";
import layouts from "../../assets/tab/layouts.svg";
import star from "../../assets/tab/star.svg";
import benefits from "../../assets/benefitsIllustration.svg";
import notFound from "../../assets/imgNotFound.svg";

const HomeTabs: FC = () => {
  const [data] = useState([
    {
      index: Math.ceil(Math.random() * 1000),
      text: (
        <>
          <img src={star} alt="" />
          <p>Experienced Tutors</p>
        </>
      ),
      outlet: (
        <>
          <Row>
            <div className={styles.tutorsLeft}>
              <h3>Only practicing tutors</h3>
              <p>
                Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames
                dictum suspendisse. Morbi mauris cras massa ut dolor quis sociis
                mollis augue. Nunc, sodales tortor sit diam mi amet massa.
                Fermentum diam diam sociis vestibulum. Nulla nisl accumsan, id
                dignissim massa ut amet. Amet enim, nisi tempus vehicula.
              </p>
            </div>
            <img src={benefits} alt="" />
          </Row>
        </>
      ),
    },
    {
      index: Math.ceil(Math.random() * 1000),
      text: (
        <>
          <img src={like} alt="" />
          <p>Feedback & Support</p>
        </>
      ),
      outlet: (
        <>
          <Row>
            <div className={styles.tutorsLeft}>
              <h3>Support</h3>
              <p>
                Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames
                dictum suspendisse. Morbi mauris cras massa ut dolor quis sociis
                mollis augue. Nunc, sodales tortor sit diam mi amet massa.
                Fermentum diam diam sociis vestibulum. Nulla nisl accumsan, id
                dignissim massa ut amet. Amet enim, nisi tempus vehicula.
              </p>
            </div>
            <img src={notFound} alt="" />
          </Row>
        </>
      ),
    },
    {
      index: Math.ceil(Math.random() * 1000),
      text: (
        <>
          <img src={layouts} alt="" />
          <p>24/7 Online Library</p>
        </>
      ),
      outlet: (
        <>
          <Row>
            <div className={styles.tutorsLeft}>
              <h3>Library</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Possimus vitae neque corporis porro, omnis, explicabo qui
                temporibus saepe sit tempore consequuntur aliquam eum dolorum
                nam illo provident molestias numquam necessitatibus!
              </p>
            </div>
            <img src={notFound} alt="" />
          </Row>
        </>
      ),
    },
    {
      index: Math.ceil(Math.random() * 1000),
      text: (
        <>
          <img src={chat} alt="" />
          <p>Community</p>
        </>
      ),
      outlet: (
        <>
          <Row>
            <div className={styles.tutorsLeft}>
              <h3>Community</h3>
              <p>
                Quisquam pariatur atque necessitatibus quo placeat suscipit quis
                impedit assumenda maxime, non aspernatur nulla aperiam voluptate
                officia, fuga dolorum magni! Necessitatibus ad ab impedit in rem
                deserunt praesentium commodi quo molestias, expedita nemo
                pariatur!
              </p>
            </div>
            <img src={notFound} alt="" />
          </Row>
        </>
      ),
    },
  ]);

  const [active, setActive] = useState(data[0].index);

  return (
    <>
      <div className={styles.buttons}>
        {data.map((tab) => (
          <Tab
            key={tab.index}
            index={tab.index}
            active={active}
            setActive={setActive}
          >
            {tab.text}
          </Tab>
        ))}
      </div>

      <div className={styles.outlet}>
        {data.filter((d) => d.index === active)[0]?.outlet}
      </div>
    </>
  );
};

export default HomeTabs;
