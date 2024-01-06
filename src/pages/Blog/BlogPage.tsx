import Title from "@src/UI/Title/Title";
import BlogToolbox from "@src/components/BlogToolbox/BlogToolbox";
import ItemsList from "@src/components/ItemList/ItemList";
import Navbar from "@src/components/Navbar/Navbar";
import { BlogTabsTypeEnum, CourseTypeEnum } from "@src/utils/interfaces";
import { FC } from "react";

import SubscribeNews from "@src/components/SubscribeNews/SubscribeNews";
import { useSearchParams } from "react-router-dom";
import styles from "./BlogPage.module.scss";

const BlogPage: FC = () => {
  const [params] = useSearchParams();
  const type = params.get("type") || "";
  const search = params.get("search") || "";
  const theme = params.get("theme") || CourseTypeEnum.All;

  return (
    <section>
      <Navbar />

      <Title className={styles.title} align="center">
        <h2>Our blog</h2>
        <h3>Createx School Journal</h3>
      </Title>

      <div className="blogToolbox">
        <div className="container">
          <BlogToolbox />
        </div>
      </div>

      <div className={styles.postsList}>
        <div className="container">
          <ItemsList
            type="blog"
            limit={9}
            theme={theme as CourseTypeEnum}
            // Строчка ниже нужна, чтобы отрезать "с" у табов Videos, Articles, Podcasts
            // у All "s" нет, так что резать ничего не надо
            itemType={(type !== "All" ? type.slice(0, -1) : type) as BlogTabsTypeEnum}
            search={search}
          />
        </div>

        {/* pagination */}
      </div>

      <div className={styles.newsletters}>
        <div className="container">
          <SubscribeNews />
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
