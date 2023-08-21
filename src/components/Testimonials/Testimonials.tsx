import { FC } from "react";
import Title from "@ui/Title/Title";

import styles from "./Testimonials.module.scss";

import profile from "@assets/profile.svg";

const Testimonials: FC = () => {
  return (
    <section className={styles.testimonials}>
      <div className="container">
        <Title align="center">
          <h2>TESTIMONIALS</h2>
          <h3>What our students say</h3>
        </Title>

        <div className={styles.testimonial}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet
            lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed
            purus facilisi. Vitae id turpis tempus ornare turpis quis non.
            Congue tortor in euismod vulputate etiam eros. Pulvinar neque
            pharetra arcu diam maecenas diam integer in.
          </p>
          <div className={styles.author}>
            <img src={profile} alt="" />
            <div className="">
              <h4>Eleanor Pena</h4>
              <span>Position, Course</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
