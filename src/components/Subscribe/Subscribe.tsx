import { FC } from "react";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Form/Input/Input";
import Title from "../../UI/Title/Title";

import styles from "./Subscribe.module.scss";

import subscribe from "../../assets/subscribe.svg";

const Subscribe: FC = () => {
  return (
    <section className={styles.subscribe}>
      <div className="container">
        <div className={styles.body}>
          <Title align="center">
            <h2>Don’t miss anything</h2>
            <h3>Subscribe to the Createx School announcements</h3>
          </Title>
          <div className={styles.footer}>
            <Input
              settings={{ size: "large", theme: "light" }}
              props={{ placeholder: "Your working email" }}
            />
            <Button settings={{ size: "large" }}>Subscribe</Button>
          </div>
        </div>
      </div>
      <img src={subscribe} className={styles.illustration} alt="" />
      <img src={subscribe} className={styles.illustration} alt="" />
    </section>
  );
};

export default Subscribe;
