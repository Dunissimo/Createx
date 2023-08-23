import { FC } from "react";

import Navbar from "@src/components/Navbar/Navbar";
import Testimonials from "@src/components/Testimonials/Testimonials";
import LatestPosts from "@src/components/LatestPosts/LatestPosts";
import Subscribe from "@src/components/Subscribe/Subscribe";
import Button from "@src/UI/Button/Button";
import Row from "@src/UI/Row/Row";
import RowItem from "@src/UI/Row/RowItem/RowItem";
import Title from "@src/UI/Title/Title";
import Value from "@src/UI/Values/Value";

import styles from "./AboutPage.module.scss";

import about from "@assets/illustration-blog.svg";
import video from "@assets/video.svg";
import strucure from "@assets/blog/ic-structure.svg";
import calendar from "@assets/blog/ic-calendar.svg";
import chat from "@assets/blog/ic-chat.svg";
import target from "@assets/blog/ic-target.svg";

const AboutPage: FC = () => {
  return (
    <section>
      <Navbar />

      <section className={styles.about}>
        <div className="container">
          <Row settings={{ gap: "165px" }}>
            <RowItem>
              <Title style={{ color: "#1e212c" }}>
                <h2>about us</h2>
                <h3>Craetex Online School</h3>
              </Title>

              <h4>
                Createx Online School is a leader in online studying. We have
                lots of courses and programs from the main market experts.
              </h4>

              <p>
                We provide relevant approaches to online learning, internships
                and employment in the largest companies in the country. Our
                educational programs help you get a new specialty from scratch.
                During your studies, we will help you find a job. Check the
                courses and online events that we organise.
              </p>

              <div className={styles.aboutButtons}>
                <Button settings={{ outline: true }}>Explore events</Button>
                <Button>Browse courses</Button>
              </div>
            </RowItem>

            <RowItem contentPosition="center">
              <img src={about} alt="" />
            </RowItem>
          </Row>
        </div>
      </section>

      <section className={styles.video}>
        <div className="container">
          <Row settings={{ gap: "135px" }}>
            <RowItem width="65%">
              {/* Here must be video */}
              <img src={video} alt="" />
            </RowItem>

            <RowItem width="35%">
              <div className={styles.videoStats}>
                <h3>1200</h3>
                <span>students graduated</span>
              </div>

              <div className={styles.videoStats}>
                <h3>84</h3>
                <span>completed courses</span>
              </div>

              <div className={styles.videoStats}>
                <h3>16</h3>
                <span>quilified tutors</span>
              </div>

              <div className={styles.videoStats}>
                <h3>5</h3>
                <span>years of experience</span>
              </div>
            </RowItem>
          </Row>
        </div>
      </section>

      <section className={styles.values}>
        <div className="container">
          <Title
            align="center"
            style={{ color: "#1e212c", marginBottom: "60px" }}
          >
            <h2>we always stand for</h2>
            <h3>Our core values</h3>
          </Title>

          <Row settings={{ justify: "center", gap: "45px" }}>
            <Value
              img={strucure}
              title="Structured Approach"
              par={
                <>
                  Aenean urna dictum adipiscing <br /> nec, cras quisque. Nunc
                  in mauris.
                </>
              }
            />

            <div className={styles.divider}></div>

            <Value
              img={chat}
              title="Professional Feedbacks"
              par={
                <>
                  Culpa nostrud commodo ea <br /> consequat reprehenderit
                  aliquip.
                </>
              }
            />

            <div className={styles.divider}></div>

            <Value
              img={target}
              title="Efficiency"
              par={
                <>
                  Viverra scelerisque consequat net. <br /> Adipisicing esse
                  consequat.
                </>
              }
            />

            <div className={styles.divider}></div>

            <Value
              img={calendar}
              title="Flexible Schedule"
              par={
                <>
                  Aute eiusmod dolore dolore <br /> deserunt veniam ad deserunt.
                </>
              }
            />
          </Row>
        </div>
      </section>

      <section className="directions"></section>

      <section className="process"></section>

      <section className="team"></section>

      <Testimonials />

      <section className="companies"></section>

      <LatestPosts />

      <Subscribe />
    </section>
  );
};

export default AboutPage;
