import { FC } from "react";
import Navbar from "@components/Navbar/Navbar";

import styles from "./NotFound.module.scss";

const NotFound: FC = () => {
  return (
    <section>
      <header>
        <Navbar />
      </header>

      <section className={styles.notFound}>
        <h1>We can't find that page.</h1>
        <p>
          It's possible that an incorrect address was specified or some kind of
          error occurred
        </p>
      </section>
    </section>
  );
};

export default NotFound;
