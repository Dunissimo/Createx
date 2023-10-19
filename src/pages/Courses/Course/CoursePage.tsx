import { FC } from "react";
import { useParams } from "react-router-dom";

import Navbar from "@src/components/Navbar/Navbar";
import Title from "@src/UI/Title/Title";
import Testimonials from "@src/components/Testimonials/Testimonials";
import Row from "@src/UI/Row/Row";
import RowItem from "@src/UI/Row/RowItem/RowItem";
import Button from "@src/UI/Button/Button";
import SocialMedia from "@src/UI/SocialMedia/SocialMedia";
import Input from "@src/UI/Form/Input/Input";
import Accordion from "@src/UI/Accordion/Accordion";
import Steps from "@src/UI/Steps/Steps";
import { useGetCourseContentQuery } from "@src/api/courses";
import Skeleton from "react-loading-skeleton";

import styles from "./CoursePage.module.scss";
import "react-loading-skeleton/dist/skeleton.css";

import curatorImg from "@assets/team/curator-image.svg";
import illustration from "@assets/illustration-course.svg";
import register from "@assets/illustration-register.svg";

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

  // if (isLoading)
  //   return (
  //     <section style={{}}>
  //       <header
  //         style={{
  //           background: "#ffdad5",
  //           minHeight: "100vh",
  //           paddingBottom: "60px",
  //         }}
  //       >
  //         <Navbar />

  //         <div className="container">
  //           <Skeleton count={1} width={"100%"} height={400} />
  //         </div>
  //       </header>
  //     </section>
  //   );

  return (
    <section>
      <header style={{ background: "#ffdad5" }}>
        <Navbar />

        <Title align="center" style={{ padding: "120px 0" }}>
          <h2 style={{ color: "#FF3F3A" }}>Course</h2>

          <h3 style={{ color: "#1e212c", maxWidth: "75%", margin: "0 auto" }}>
            {isLoading ? <Skeleton /> : title}
          </h3>
        </Title>
      </header>

      <section className={styles.about}>
        <div className="container">
          <Row settings={{ gap: "135px", align: "flex-start" }}>
            <RowItem className={styles.aboutLeft}>
              <h2>About the course</h2>

              <p>{isLoading ? <Skeleton height={200} /> : about}</p>

              <h3>You will learn:</h3>

              <ul>
                {isLoading
                  ? new Array(4).fill(0).map(() => <Skeleton />)
                  : willLearn?.map((item, key) => <li key={key}>{item}</li>)}
              </ul>
            </RowItem>

            <RowItem className={styles.aboutRight}>
              {isLoading ? (
                <Skeleton height={500} />
              ) : (
                <>
                  <div className={styles.info}>
                    <h4>Dates</h4>
                    <h3>{info?.date}</h3>
                    <p>Metus turpis sit lorem lacus, in elit tellus lacus.</p>
                  </div>

                  <div className={styles.info}>
                    <h4>Duration</h4>
                    <h3>{info?.duration}</h3>
                    <p>
                      Rhoncus pellentesque auctor auctor orci vulputate faucibus
                      quis ut.
                    </p>
                  </div>

                  <div className={styles.info}>
                    <h4>Price</h4>
                    <h3>${info?.price} per month</h3>
                    <p>
                      Nulla sem adipiscing adipiscing felis fringilla.
                      Adipiscing mauris quam ac elit tristique dis.
                    </p>
                  </div>

                  <Button settings={{ isFullWidth: true }}>
                    Join the course
                  </Button>
                </>
              )}
            </RowItem>
          </Row>
        </div>
      </section>

      <section className={styles.curator}>
        <div className="container">
          <Row settings={{ gap: "135px" }}>
            <RowItem>
              {isLoading ? (
                <Skeleton height={500} />
              ) : (
                <img src={curatorImg} alt="" />
              )}
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
          <Title
            align="center"
            style={{ color: "#1e212c", marginBottom: "60px" }}
          >
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
              <div style={{ minWidth: "25%" }}>
                <Input placeholder="Your full name" />
              </div>

              <div style={{ minWidth: "25%" }}>
                <Input type="email" placeholder="Your working email" />
              </div>

              <div style={{ minWidth: "25%" }}>
                <Input type="tel" placeholder="Your phone number" />
              </div>

              <Button props={{ type: "submit", style: { width: "135px" } }}>
                Join the course
              </Button>
            </form>
          </div>
        </section>
      ) : null}

      <section className={styles.forWhom}>
        <div className="container">
          <Row settings={{ gap: "135px", align: "flex-start" }}>
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
                  ? new Array(5).fill(0).map(() => <Skeleton height={30} />)
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
                  ? new Array(4).fill(0).map(() => <Skeleton height={60} />)
                  : whatWillULearn?.lessons.map(
                      ({ numberOfItem, head, text }, i) => {
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
                      }
                    )}
              </div>
            </RowItem>

            <RowItem>
              <img src={illustration} alt="" />
            </RowItem>
          </Row>
        </div>
      </section>

      <Testimonials />

      <section className={styles.register}>
        <div className="container">
          <Row settings={{ gap: "185px" }}>
            <RowItem>
              <img src={register} alt="" />
            </RowItem>

            <RowItem>
              <Title style={{ color: "#1e212c" }}>
                <h2>leave a request now and get 20% off!</h2>
                <h3>Register for the course</h3>
              </Title>

              <form className={styles.registerForm}>
                <Input placeholder="Your full name" id="fullName" />

                <Input
                  type="email"
                  placeholder="Your working email"
                  id="email"
                />

                <Input type="tel" placeholder="Your phone number" id="phone" />

                <Button
                  settings={{ isFullWidth: true }}
                  props={{ type: "submit", style: { marginTop: "16px" } }}
                >
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
