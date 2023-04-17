import { FC } from "react";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Form/Input/Input";
import Title from "../../UI/Title/Title";

import styles from "./Subscribe.module.scss";

const Subscribe: FC = () => {
  return (
    <div className={styles.subscribe}>
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

            {/* TODO: add images */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
