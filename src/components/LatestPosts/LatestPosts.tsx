import { FC } from "react";
import BlogCardUI from "@ui/Blog/BlogCard/BlogCard";
import Button from "@src/UI/Button/Button";
import Title from "@src/UI/Title/Title";
import { useGetPostsQuery } from "@src/api/posts";

import styles from "./LatestPosts.module.scss";

const LatestPosts: FC = () => {
  const { data, isLoading, isError } = useGetPostsQuery();

  if (isError) {
    return <h1>Error!</h1>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const sorted = data?.slice(0, 3).sort((a, b) => {
    return Number(new Date(b.details.date)) - Number(new Date(a.details.date));
  });

  return (
    <div className="container">
      <div className={styles.latestPosts}>
        <div className={styles.latestTop}>
          <Title style={{ color: "#1e212c" }}>
            <h2>Our blog</h2>
            <h3>Latest posts</h3>
          </Title>

          <Button>Go to blog</Button>
        </div>

        <div className={styles.list}>
          {sorted?.map((post) => (
            <div style={{ width: "33.333%" }} key={post.id}>
              <BlogCardUI card={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestPosts;
