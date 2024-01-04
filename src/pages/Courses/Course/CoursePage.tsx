import { FC } from "react";
import { useParams } from "react-router-dom";

import Accordion from "@src/UI/Accordion/Accordion";
import Button from "@src/UI/Button/Button";
import Input from "@src/UI/Form/Input/Input";
import Row from "@src/UI/Row/Row";
import RowItem from "@src/UI/Row/RowItem/RowItem";
import SocialMedia from "@src/UI/SocialMedia/SocialMedia";
import Steps from "@src/UI/Steps/Steps";
import Title from "@src/UI/Title/Title";
import { useGetCourseContentQuery } from "@src/api/courses";
import Navbar from "@src/components/Navbar/Navbar";
import Testimonials from "@src/components/Testimonials/Testimonials";
import Skeleton from "react-loading-skeleton";

import "react-loading-skeleton/dist/skeleton.css";
import styles from "./CoursePage.module.scss";

import illustration from "@assets/illustration-course.svg";
import register from "@assets/illustration-register.svg";
import curatorImg from "@assets/team/curator-image.svg";
import { Info, InfoItem } from "@src/UI/Cards/Info/Info";

const CoursePage: FC = () => {
  const { id } = useParams();

  const { data: courseContent, isLoading } = useGetCourseContentQuery(id || "");

  const {
    about,
    curator,
    discount,
    info,
    listForWhom,
    steps,
    title,
    whatWillULearn,
    willLearn,
  } = courseContent?.data || {};

  return (
    <section>
      <header style={{ background: "#ffdad5" }}>
        <Navbar />

        <Title className={styles.title} align="center">
          <h2>Course</h2>

          <h3>{isLoading ? <Skeleton /> : title}</h3>
        </Title>
      </header>

      <section className={styles.about}>
        <div className="container">
          <Row className={styles.aboutRow}>
            <RowItem className={styles.aboutLeft}>
              <h2>About the course</h2>

              <p>{isLoading ? <Skeleton height={200} /> : about}</p>

              <h3>You will learn:</h3>

              <ul>
                {isLoading
                  ? new Array(4).fill(0).map((_, index) => <Skeleton key={index} />)
                  : willLearn?.map((item, key) => <li key={key}>{item}</li>)}
              </ul>
            </RowItem>

            <RowItem className={styles.aboutRight}>
              {isLoading ? (
                <Skeleton height={500} />
              ) : (
                <Info>
                  <InfoItem
                    subtitle="Dates"
                    title={info?.date}
                    par="Metus turpis sit lorem lacus, in elit tellus lacus."
                  />

                  <InfoItem
                    subtitle="Duration"
                    title={info?.duration}
                    par="Rhoncus pellentesque auctor auctor orci vulputate faucibus quis ut."
                  />

                  <InfoItem
                    subtitle="Price"
                    title={`$${info?.price} per month`}
                    par="Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris
                      quam ac elit tristique dis."
                  />

                  <Button isFullWidth>Join the course</Button>
                </Info>
              )}
            </RowItem>
          </Row>
        </div>
      </section>

      <section className={styles.curator}>
        <div className="container">
          <Row className={styles.curatorRow}>
            <RowItem>
              {isLoading ? <Skeleton height={500} /> : <img src={curatorImg} alt="" />}
            </RowItem>

            <RowItem className={styles.curatorInfo}>
              {isLoading ? (
                <Skeleton height={500} />
              ) : (
                <>
                  <Title style={{ color: "#1e212c", marginBottom: "16px" }}>
                    <h2>course curator</h2>
                    <h3>{curator?.name}</h3>
                  </Title>

                  <span>{curator?.job}</span>

                  <ul className={styles.stats}>
                    <li>{curator?.rating} rate</li>
                    <li>{curator?.coursesCount} courses</li>
                    <li>{curator?.studentsCount} students</li>
                  </ul>

                  <p>{curator?.text}</p>

                  {/* TODO: replace to curator?.socialMediaLinks */}
                  <div className={styles.social}>
                    <SocialMedia social="facebook" className="curator" />
                    <SocialMedia social="behance" className="curator" />
                    <SocialMedia social="twitter" className="curator" />
                    <SocialMedia social="instagram" className="curator" />
                  </div>
                </>
              )}
            </RowItem>
          </Row>
        </div>
      </section>

      <section className={styles.steps}>
        <div className="container">
          <Title align="center" style={{ color: "#1e212c", marginBottom: "60px" }}>
            <h2>Main steps</h2>
            <h3>Online learning process</h3>
          </Title>

          {isLoading ? (
            <Skeleton height={250} />
          ) : (
            <Steps data={steps || []} type="vertical" />
          )}
        </div>
      </section>

      {discount! > 0 ? (
        <section className="container">
          <div className={styles.cta}>
            <div className={styles.top}>
              <h3>{discount}% discount for early birds!</h3>

              <div className={styles.timer}>
                <div className={styles.days}>
                  <p>06</p>
                  <span>Days</span>
                </div>

                <div className={styles.hours}>
                  <p>18</p>
                  <span>Hours</span>
                </div>

                <div className={styles.mins}>
                  <p>24</p>
                  <span>Mins</span>
                </div>

                <div className={styles.sec}>
                  <p>12</p>
                  <span>Sec</span>
                </div>
              </div>
            </div>

            <form className={styles.body}>
              <div>
                <Input placeholder="Your full name" />
              </div>

              <div>
                <Input type="email" placeholder="Your working email" />
              </div>

              <div>
                <Input type="tel" placeholder="Your phone number" />
              </div>

              <Button type="submit">Join the course</Button>
            </form>
          </div>
        </section>
      ) : null}

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

      <section className={styles.program}>
        <div className="container">
          <Row settings={{ gap: "135px", align: "flex-start" }}>
            <RowItem>
              <Title style={{ color: "#1e212c", marginBottom: "60px" }}>
                <h2>course program</h2>
                <h3>What will you learn</h3>
              </Title>

              <div className={styles.programList}>
                {isLoading
                  ? new Array(4)
                      .fill(0)
                      .map((_, index) => <Skeleton key={index} height={60} />)
                  : whatWillULearn?.lessons.map(({ numberOfItem, head, text }, i) => {
                      return (
                        <Accordion
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
                      );
                    })}
              </div>
            </RowItem>

            <RowItem className={styles.programRight}>
              <img src={illustration} alt="" />
            </RowItem>
          </Row>
        </div>
      </section>

      <Testimonials />

      <section className={styles.register}>
        <div className="container">
          <Row settings={{ gap: "100px" }}>
            <RowItem className={styles.registerLeft} width="55%">
              <img src={register} alt="" />
            </RowItem>

            <RowItem className={styles.registerRight} contentAlign="center">
              <Title style={{ color: "#1e212c" }}>
                <h2>leave a request now and get 20% off!</h2>
                <h3>Register for the course</h3>
              </Title>

              <form className={styles.registerForm}>
                <div className={styles.formBlock}>
                  <label htmlFor="fullName">Full name</label>
                  <Input placeholder="Your full name" id="fullName" />
                </div>

                <div className={styles.formBlock}>
                  <label htmlFor="email">Email</label>
                  <Input type="email" placeholder="Your working email" id="email" />
                </div>

                <div className={styles.formBlock}>
                  <label htmlFor="phone">Phone</label>
                  <Input type="tel" placeholder="Your phone number" id="phone" />
                </div>

                <Button isFullWidth type="submit" style={{ marginTop: "16px" }}>
                  Join the course
                </Button>
              </form>
            </RowItem>
          </Row>
        </div>
      </section>

      {/* <section className={styles.checkOther}></section> */}
    </section>
  );
};

export default CoursePage;
