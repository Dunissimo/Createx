import { FC } from "react";
import BlogCardUI from "@ui/Blog/BlogCard/BlogCard";
import Button from "@src/UI/Button/Button";
import Title from "@src/UI/Title/Title";
import { useGetPostsQuery } from "@src/api/posts";

import styles from "./LatestPosts.module.scss";
import { handleLinkClick } from "@src/utils/helpers";
import { Link } from "react-router-dom";
import ItemsList from "../ItemList/ItemList";

const LatestPosts: FC = () => {
  return (
    <div className="container">
      <div className={styles.latestPosts}>
        <div className={styles.latestTop}>
          <Title style={{ color: "#1e212c" }}>
            <h2>Our blog</h2>
            <h3>Latest posts</h3>
          </Title>

          <Link to="/blog" onClick={handleLinkClick}>
            <Button>Go to blog</Button>
          </Link>
        </div>

        <div className={styles.list}>
          <ItemsList type="blog" limit={3} sortBy="Newest"/>
        </div>
      </div>
    </div>
  );
};

export default LatestPosts;
