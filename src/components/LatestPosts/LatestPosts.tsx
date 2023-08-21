import { FC, useEffect } from "react";
import { fetchPosts } from "@redux/slices/blogSlice";
import BlogCardUI from "@ui/Blog/BlogCard/BlogCard";
import { useAppDispatch, useAppSelector } from "@utils/hooks";

import styles from "./LatestPosts.module.scss";

const LatestPosts: FC = () => {
  const dispatch = useAppDispatch();
  const { posts, loading, error } = useAppSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  if (error) {
    return <h1>Error!</h1>;
  }

  const sorted = posts.slice(0, 3).sort((a, b) => {
    if (new Date(a.details.date) > new Date(b.details.date)) return -1;
    else if (new Date(a.details.date) < new Date(b.details.date)) return 1;
    else return 0;
  });

  return (
    <div className={styles.list}>
      {loading && <div>Loading...</div>}
      {sorted.map((post) => (
        <div style={{ width: "33.333%" }} key={post.id}>
          <BlogCardUI card={post} />
        </div>
      ))}
    </div>
  );
};

export default LatestPosts;
