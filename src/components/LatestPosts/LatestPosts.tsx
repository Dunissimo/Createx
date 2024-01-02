import Button from "@src/UI/Button/Button";
import Title from "@src/UI/Title/Title";
import { FC } from "react";

import { handleLinkClick } from "@src/utils/helpers";
import clsx from "clsx";
import { Link } from "react-router-dom";
import ItemsList from "../ItemList/ItemList";
import styles from "./LatestPosts.module.scss";

interface ILatestPostsProps {
  className?: string;
  isWithTitle?: boolean;
}

const LatestPosts: FC<ILatestPostsProps> = ({ className, isWithTitle = false }) => {
  return (
    <div className="container">
      <div className={clsx(styles.latestPosts, className)}>
        {isWithTitle && (
          <div className={styles.latestTop}>
            <Title style={{ color: "#1e212c" }}>
              <h2>Our blog</h2>
              <h3>Latest posts</h3>
            </Title>

            <Link to="/blog" onClick={handleLinkClick}>
              <Button>Go to blog</Button>
            </Link>
          </div>
        )}

        <ItemsList limit={3} type="blog" />
      </div>
    </div>
  );
};

export default LatestPosts;
