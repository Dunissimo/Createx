import Certificate from "@components/Certificate/Certificate";
import Navbar from "@components/Navbar/Navbar";
import Subscribe from "@components/Subscribe/Subscribe";
import Testimonials from "@components/Testimonials/Testimonials";
import Title from "@ui/Title/Title";
import { FC } from "react";

import CoursesToolbox from "@src/components/CoursesToolbox/CoursesToolbox";
import ItemsList from "@src/components/ItemList/ItemList";
import { CourseTypeEnum } from "@src/utils/interfaces";
import { useSearchParams } from "react-router-dom";
import styles from "./Courses.module.scss";

const CoursesPage: FC = () => {
  const [params] = useSearchParams();
  const type = params.get("type") || "";
  const search = params.get("search") || "";

  return (
    <section className={styles.courses}>
      <header>
        <Navbar />
      </header>

      <section className={styles.body}>
        <div className="container">
          <Title align="center" style={{ paddingBottom: "70px", color: "#1e212c" }}>
            <h2>Enjoy your studying!</h2>
            <h3>Our online courses</h3>
          </Title>

          <CoursesToolbox type={type as CourseTypeEnum} />

          <div style={{ marginBottom: "120px" }}>
            <ItemsList
              type="course"
              orientation="vertical"
              search={search}
              limit={9}
              columns={3}
              itemType={type as CourseTypeEnum}
            />
          </div>
        </div>
      </section>
      <Testimonials />
      <Certificate />
      <Subscribe />
    </section>
  );
};

export default CoursesPage;
