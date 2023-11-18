import { FC } from "react";

import styles from "./SubscribeNews.module.scss";
import Row from "@src/UI/Row/Row";
import RowItem from "@src/UI/Row/RowItem/RowItem";
import Input from "@src/UI/Form/Input/Input";
import Button from "@src/UI/Button/Button";

import blog from "@assets/blog/blog-illustration.svg";

const SubscribeNews: FC = () => {
  return (
    <div className={styles.newsletters}>
      <Row>
        <RowItem>
          <img src={blog} alt="" />
        </RowItem>

        <RowItem>
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
