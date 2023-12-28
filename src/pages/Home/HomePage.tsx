import Certificate from "@components/Certificate/Certificate";
import Navbar from "@components/Navbar/Navbar";
import Subscribe from "@components/Subscribe/Subscribe";
import TeamList from "@components/TeamList/TeamList";
import Testimonials from "@components/Testimonials/Testimonials";
import BenefitsTabs from "@src/UI/Tabs/BenefitTabs";
import { handleLinkClick } from "@src/utils/helpers";
import Button from "@ui/Button/Button";
import Row from "@ui/Row/Row";
import RowItem from "@ui/Row/RowItem/RowItem";
import Title from "@ui/Title/Title";
import { FC } from "react";
import { Link } from "react-router-dom";

import styles from "./Home.module.scss";

import homeIllustration from "@assets/homeIllustration.svg";
import showreel from "@assets/icons/showreel.svg";
import whoWeAreIllustration from "@assets/whoWeAre.png";
import ItemsList from "@src/components/ItemList/ItemList";

const HomePage: FC = () => {
  return (
    <section>
      {/* Header */}
      <header className={styles.header}>
        <Navbar />

        <div className="container">
          <Row className={styles.headerBody}>
            <RowItem>
              <div className={styles.headerLeft}>
                <button onClick={() => alert("Будет реализовано в будущем!")}>
                  <img src={showreel} alt="" />
                  Play showreel
                </button>
                <h2>
                  Enjoy studying <br /> with Createx <br /> Online Courses
                </h2>
                <div className={styles.buttons}>
                  <Link to="/about" onClick={handleLinkClick}>
                    <Button outline>About us</Button>
                  </Link>
                  <Link to="/courses?type=All" onClick={handleLinkClick}>
                    <Button>Explore courses</Button>
                  </Link>
                </div>
              </div>
            </RowItem>

            <RowItem>
              <img src={homeIllustration} alt="" />
            </RowItem>
          </Row>

          <div className={styles.headerFooter}>
            <ul className={styles.headerAchievements}>
              <li>
                <span>1200</span>
                <p>Students graduated</p>
              </li>

              <span></span>
              <li>
                <span>84</span>
                <p>Comleted courses</p>
              </li>

              <span></span>
              <li>
                <span>16</span>
                <p>Qualified tutors</p>
              </li>

              <span></span>
              <li>
                <span>5</span>
                <p>Years of experience</p>
              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* Who we are */}
      <section className={styles.whoWeAre}>
        <Row className={`container ${styles.whoWeAreContainer}`}>
          <RowItem>
            <img src={whoWeAreIllustration} alt="" />
          </RowItem>

          <RowItem className={styles.whoWeAreDiv}>
            <Title>
              <h2>Who we are</h2>
              <h3>Why Createx?</h3>
            </Title>

            <ul className={styles.whoWeAreList}>
              <li>A fermentum in morbi pretium aliquam adipiscing donec tempus.</li>

              <li>Vulputate placerat amet pulvinar lorem nisl.</li>

              <li>
                Consequat feugiat habitant gravida quisque elit bibendum id adipiscing
                sed.
              </li>

              <li>Etiam duis lobortis in fames ultrices commodo nibh.</li>

              <li>Tincidunt sagittis neque sem ac eget.</li>

              <li>
                Ultricies amet justo et eget quisque purus vulputate dapibus tortor.
              </li>
            </ul>

            <Link to="/about" onClick={handleLinkClick}>
              <Button>More about us</Button>
            </Link>
          </RowItem>
        </Row>
      </section>

      {/* courses */}
      <section className={styles.courses}>
        <div className="container">
          <div className={styles.coursesHeader}>
            <Title>
              <h2>Ready to learn?</h2>
              <h3>Featured Courses</h3>
            </Title>

            <Button>
              <Link to="/courses?type=All">View all courses</Link>
            </Button>
          </div>

          <ItemsList type="course" limit={6} columns={2} />
        </div>
      </section>

      {/* benefits */}
      <section className={styles.benefits}>
        <div className="container">
          <Title align="center">
            <h2>Our benefits</h2>
            <h3>That`s how we do it</h3>
          </Title>

          <BenefitsTabs />
        </div>
      </section>

      {/* Events */}

      <section className={styles.events}>
        <div className="container">
          <Title align="center" style={{ paddingBottom: "60px" }}>
            <h2>Our events</h2>
            <h3>Lectures & workshops</h3>
          </Title>

          <ItemsList type="event" limit={3} columns={1} />

          <div className={styles.eventsFooter}>
            <h3>Do you want more?</h3>
            <Link onClick={handleLinkClick} to="/events?orientation=horizontal&perPage=9">
              <Button size="xl">Explore all events</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Certificate */}
      <Certificate />

      {/* team */}

      <section className={styles.team}>
        <div className="container">
          <div className={styles.teamTop}>
            <Title style={{ marginBottom: "60px" }}>
              <h2>Best tutors are all here</h2>
              <h3>Meet our team</h3>
            </Title>
          </div>

          {/* TODO: не отображаются skeletons */}
          <TeamList />
        </div>
      </section>

      {/* testimonials */}
      <Testimonials />

      {/* latest posts */}
      <div className={styles.latestPosts}>
        <div className="container">
          <ItemsList limit={3} type="blog" />
        </div>
      </div>

      {/* subscribe */}
      <Subscribe />
    </section>
  );
};

export default HomePage;
