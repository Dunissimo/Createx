import { FC, useEffect } from "react";
import clsx from "clsx";
import { fetchPosts } from "@redux/slices/blogSlice";
import BlogCardUI from "@ui/Blog/BlogCard/BlogCard";
import Button from "@src/UI/Button/Button";
import Title from "@src/UI/Title/Title";
import { useAppDispatch, useAppSelector } from "@utils/hooks";

import styles from "./LatestPosts.module.scss";

const LatestPosts: FC = () => {
  const dispatch = useAppDispatch();
  const { posts, loading, error } = useAppSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <h1>Error!</h1>;
  }

  const sorted = posts.slice(0, 3).sort((a, b) => {
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
          {sorted.map((post) => (
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
