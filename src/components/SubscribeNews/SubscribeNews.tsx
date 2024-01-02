import { FC } from "react";

import Button from "@src/UI/Button/Button";
import Input from "@src/UI/Form/Input/Input";
import Row from "@src/UI/Row/Row";
import RowItem from "@src/UI/Row/RowItem/RowItem";
import styles from "./SubscribeNews.module.scss";

import blog from "@assets/blog/blog-illustration.svg";

const SubscribeNews: FC = () => {
  return (
    <div className={styles.newsletters}>
      <Row className={styles.newsRow}>
        <RowItem className={styles.newsLeft}>
          <img src={blog} alt="" />
        </RowItem>

        <RowItem className={styles.newsRight}>
          <h3>
            Want to get the best articles weekly? <br /> Subscribe to our newsletter!
          </h3>

          <form action="newsletters" className={styles.newsForm}>
            <div className={styles.newsInput}>
              <Input placeholder="Your working email" />

              <Button type="submit">Subscribe</Button>
            </div>

            <div className={styles.newsCheckbox}>
              <Input id="agree" type="checkbox" />

              <label htmlFor="agree">
                I agree to receive communications from Createx Online School
              </label>
            </div>
          </form>
        </RowItem>
      </Row>
    </div>
  );
};

export default SubscribeNews;
