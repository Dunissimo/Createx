import { FC } from "react";
import { useParams } from "react-router-dom";
import clsx from "clsx";

import Navbar from "@src/components/Navbar/Navbar";
import Title from "@src/UI/Title/Title";
import Testimonials from "@src/components/Testimonials/Testimonials";
import Row from "@src/UI/Row/Row";
import RowItem from "@src/UI/Row/RowItem/RowItem";
import Button from "@src/UI/Button/Button";
import SocialMedia from "@src/UI/SocialMedia/SocialMedia";
import Input from "@src/UI/Form/Input/Input";
import Accordion from "@src/UI/Accordion/Accordion";

import styles from "./CoursePage.module.scss";

import curator from "@assets/team/curator-image.svg";
import illustration from "@assets/illustration-course.svg";
import register from "@assets/illustration-register.svg";

const lessons = [
  "Aliquet lectus urna viverra in odio.",
  "Orci commodo, viverra orci mollis ut euismod.",
  "Sagittis vitae facilisi rutrum amet mauris quisque vel.",
  "In id dolor quis nunc, urna hendrerit pharetra.",
  "Est, ut tempus id rutrum facilisi.",
  "Amet nec in pellentesque.",
  "Massa vel arcu mauris, id vel rhoncus mattis quis.",
  "Neque, cursus sapien nullam id.",
];

const CoursePage: FC = () => {
  const { id } = useParams();

  return (
    <section>
      <header style={{ background: "#ffdad5" }}>
        <Navbar />

        <Title align="center" style={{ padding: "120px 0" }}>
          <h2 style={{ color: "#FF3F3A" }}>Course</h2>

          <h3 style={{ color: "#1e212c" }}>
            User Experience. Principles of Human-Centered <br /> Design
          </h3>
        </Title>
      </header>

      <section className={styles.about}>
        <div className="container">
          <Row settings={{ gap: "135px" }}>
            <RowItem className={styles.aboutLeft}>
              <h2>About the course</h2>

              <p>
                Bibendum vulputate adipiscing venenatis at est, a eu tincidunt.
                Leo aenean congue in sagittis, felis maecenas amet varius at.
                Pellentesque euismod in faucibus at elementum. Tellus maecenas
                libero est tempus sit cras at malesuada diam. Consequat senectus
                dictumst non hac dignissim montes, pretium, egestas molestie.
                Sed magna aliquet ornare nibh vel lectus diam eget pretium.
                Lorem risus nunc tincidunt tortor, mi nulla pellentesque
              </p>

              <h3>You will learn:</h3>

              <ul>
                <li>
                  A fermentum in morbi pretium aliquam adipiscing donec tempus.
                </li>
                <li>Vulputate placerat amet pulvinar lorem nisl.</li>
                <li>
                  Consequat feugiat habitant gravida quisque elit bibendum id
                  adipiscing sed.
                </li>
                <li>Etiam duis lobortis in fames ultrices commodo nibh.</li>
                <li>
                  Fringilla in nec risus congue venenatis pretium posuere nec.
                </li>
                <li>Cursus eu pretium, vulputate tempus quam massa sed at.</li>
              </ul>
            </RowItem>

            <RowItem className={styles.aboutRight}>
              <div className={styles.info}>
                <h4>Dates</h4>
                <h3>Sept 7 – Nov 2</h3>
                <p>Metus turpis sit lorem lacus, in elit tellus lacus.</p>
              </div>

              <div className={styles.info}>
                <h4>Duration</h4>
                <h3>2 months – 8 lessons</h3>
                <p>
                  Rhoncus pellentesque auctor auctor orci vulputate faucibus
                  quis ut.
                </p>
              </div>

              <div className={styles.info}>
                <h4>Price</h4>
                <h3>$120 per month</h3>
                <p>
                  Nulla sem adipiscing adipiscing felis fringilla. Adipiscing
                  mauris quam ac elit tristique dis.
                </p>
              </div>

              <Button settings={{ isFullWidth: true }}>Join the course</Button>
            </RowItem>
          </Row>
        </div>
      </section>

      <section className={styles.curator}>
        <div className="container">
          <Row settings={{ gap: "135px" }}>
            <RowItem>
              <img src={curator} alt="" />
            </RowItem>

            <RowItem className={styles.curatorInfo}>
              <Title style={{ color: "#1e212c", marginBottom: "16px" }}>
                <h2>course curator</h2>
                <h3>Cody Fisher</h3>
              </Title>

              <span>Senior UX designer in IT Product Company</span>

              <ul className={styles.stats}>
                <li>4.9 rate</li>
                <li>4 courses</li>
                <li>350 students</li>
              </ul>

              <p>
                Mattis adipiscing aliquam eu proin metus a iaculis faucibus.
                Tempus curabitur venenatis, vulputate venenatis fermentum ante.
                Nisl, amet id semper semper quis commodo, consequat. Massa
                rhoncus sit morbi odio. Sit maecenas nibh consectetur vel diam.
                Sem vulputate molestie laoreet at massa sed pharetra. Ac commodo
                platea id habitasse proin. Nullam sit nec ipsum posuere non. Nam
                vel aliquam tristique sollicitudin interdum quam.
              </p>

              <div className={styles.social}>
                <SocialMedia social="facebook" className="curator" />
                <SocialMedia social="behance" className="curator" />
                <SocialMedia social="twitter" className="curator" />
                <SocialMedia social="instagram" className="curator" />
              </div>
            </RowItem>
          </Row>
        </div>
      </section>

      {/* TODO: Перенести в UI  */}
      <section className={styles.steps}>
        <div className="container">
          <Title align="center" style={{ color: "#1e212c" }}>
            <h2>Main steps</h2>
            <h3>Online learning process</h3>
          </Title>

          <div className={styles.stepsList}>
            <div className={styles.step}>
              <h3>01</h3>
              <h4>Watching online video lectures</h4>
              <p>
                Culpa nostrud commodo ea consequat <br /> aliquip reprehenderit.
                Veniam velit <br /> nostrud aliquip sunt.
              </p>
            </div>

            <div className={styles.step}>
              <h3>02</h3>
              <h4>Passing test</h4>
              <p>
                Anim reprehenderit sint voluptate <br /> exercitation
                adipisicing laborum <br /> adipisicing. Minim ad tempor est ea.
              </p>
            </div>

            <div className={styles.step}>
              <h3>03</h3>
              <h4>Curator’s feedback</h4>
              <p>
                Adipisicing esse aliqua aliquip qui amet. <br /> Aute eiusmod
                dolore dolore et ad et <br /> veniam ad deserunt.
              </p>
            </div>

            <div className={clsx(styles.step, styles.finalStep)}>
              <h3>04</h3>
              <h4>Corrections if needed</h4>
              <p>
                Sit veniam aute dolore adipisicing nulla <br /> sit culpa. Minim
                mollit voluptate ullamco <br /> proident ea ad.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className={styles.cta}>
          <div className={styles.top}>
            <h3>20% discount for early birds!</h3>

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
              <Input
                props={{ placeholder: "Your full name" }}
                settings={{
                  label: { content: "Full name", position: "top" },
                }}
              />
            </div>

            <div style={{ minWidth: "25%" }}>
              <Input
                props={{ type: "email", placeholder: "Your working email" }}
                settings={{ label: { content: "Email", position: "top" } }}
              />
            </div>

            <div style={{ minWidth: "25%" }}>
              <Input
                props={{ type: "tel", placeholder: "Your phone number" }}
                settings={{ label: { content: "Phone", position: "top" } }}
              />
            </div>

            <Button props={{ type: "submit", style: { width: "135px" } }}>
              Join the course
            </Button>
          </form>
        </div>
      </section>

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
                <li>
                  Specialists with more than 1 year of active work experience
                </li>
                <li>
                  Mobile app designers who want to improve their skills in{" "}
                  <br />
                  solving business problems, creating and testing <br />{" "}
                  human-centered interfaces
                </li>
                <li>
                  Professional designers who want to feel more confident in UX
                </li>
                <li>
                  Specialists who would like to structure their knowledge, fill
                  in <br /> the gaps
                </li>
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
                {lessons.map((lesson, i) => {
                  return (
                    <Accordion
                      key={i}
                      head={
                        <>
                          <span
                            style={{ color: "#ff3f3a", marginRight: "10px" }}
                          >
                            Lesson {i + 1}.
                          </span>
                          {lesson}
                        </>
                      }
                    >
                      <p style={{ color: "#424551" }}>
                        Nulla amet, sagittis potenti rhoncus sit. Elit lectus
                        nec pulvinar aliquet donec enim, ornare. Lacus facilisi
                        curabitur turpis varius mauris. Nisi, tempus risus, odio
                        mi suscipit sed. Curabitur faucibus porttitor quis sem
                        lacus, arcu feugiat facilisis. Commodo nunc orci vitae
                        accumsan id.
                      </p>
                    </Accordion>
                  );
                })}
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
                <Input
                  props={{ placeholder: "Your full name", id: "fullName" }}
                  settings={{
                    label: { content: "Full name", position: "top" },
                  }}
                />

                <Input
                  props={{
                    type: "email",
                    placeholder: "Your working email",
                    id: "email",
                  }}
                  settings={{ label: { content: "Email", position: "top" } }}
                />

                <Input
                  props={{
                    type: "tel",
                    placeholder: "Your phone number",
                    id: "phone",
                  }}
                  settings={{ label: { content: "Phone", position: "top" } }}
                />

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
