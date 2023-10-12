import { FC } from "react";
import Certificate from "@components/Certificate/Certificate";
import CoursesList from "@components/CoursesList/CoursesList";
import Navbar from "@components/Navbar/Navbar";
import Subscribe from "@components/Subscribe/Subscribe";
import Testimonials from "@components/Testimonials/Testimonials";
import Title from "@ui/Title/Title";

import styles from "./Courses.module.scss";
import ItemsList from "@src/components/ItemList/ItemList";

const CoursesPage: FC = () => {
  return (
    <section className={styles.courses}>
      <header>
        <Navbar />
      </header>

      <section className={styles.body}>
        <div className="container">
          <Title
            align="center"
            style={{ paddingBottom: "70px", color: "#1e212c" }}
          >
            <h2>Enjoy your studying!</h2>
            <h3>Our online courses</h3>
          </Title>

          {/* TODO: <CoursesTabs/> */}
          <ItemsList
            type="course"
            orientation="vertical"
            limit={9}
            columns={3}
          />
        </div>
      </section>
      <Testimonials />
      <Certificate />
      <Subscribe />
    </section>
  );
};

export default CoursesPage;
