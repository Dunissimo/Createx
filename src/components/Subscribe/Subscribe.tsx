import { FC } from "react";
import Button from "@ui/Button/Button";
import Input from "@ui/Form/Input/Input";
import Title from "@ui/Title/Title";

import styles from "./Subscribe.module.scss";

import subscribe from "@assets/subscribe.svg";

const Subscribe: FC = () => {
  return (
    <section className={styles.subscribe}>
      <div className="container">
        <div className={styles.body}>
          <Title align="center" style={{ color: "#1e212c" }}>
            <h2>Don’t miss anything</h2>
            <h3>
              Subscribe to the Createx School <br /> announcements
            </h3>
          </Title>
          <div className={styles.footer}>
            <Input
              variant="large"
              theme="light"
              placeholder="Your working email"
            />
            <Button size="large">Subscribe</Button>
          </div>
        </div>
      </div>

      <img src={subscribe} className={styles.illustration} alt="" />
      <img src={subscribe} className={styles.illustration} alt="" />
    </section>
  );
};

export default Subscribe;
