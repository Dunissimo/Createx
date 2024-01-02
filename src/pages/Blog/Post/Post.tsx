import Row from "@src/UI/Row/Row";
import RowItem from "@src/UI/Row/RowItem/RowItem";
import { useGetPostContentQuery } from "@src/api/posts";
import Navbar from "@src/components/Navbar/Navbar";
import { useUrl } from "@src/utils/hooks";
import { FC } from "react";
import { useParams } from "react-router-dom";

import { firstLetterToUpperCase } from "@src/utils/helpers";
import styles from "./Post.module.scss";

const PostPage: FC = () => {
  const { id } = useParams();

  const { data: postContent, isLoading } = useGetPostContentQuery(id || "");

  const { img, title, type, theme, date, duration } = postContent || {};

  const url = useUrl(`blog/${img}`);

  return (
    <div>
      <Navbar />

      <main className="container">
        <Row settings={{ gap: "80px" }}>
          <RowItem width="70%" className={styles.info}>
            <div className={styles.details}>
              <div className="">
                <span>{firstLetterToUpperCase(type || "404")}</span>|<span>{theme}</span>
              </div>

              <h1>{title}</h1>

              <div className="">
                <span>{date}</span>
                <span>{duration}</span>
              </div>
            </div>

            <img className={styles.mainImage} src={url} alt="" />
          </RowItem>

          <RowItem width="30%">sidebar</RowItem>
        </Row>
      </main>
    </div>
  );
};

export default PostPage;
