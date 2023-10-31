import Title from "@src/UI/Title/Title";
import BlogToolbox from "@src/components/BlogToolbox/BlogToolbox";
import ItemsList from "@src/components/ItemList/ItemList";
import Navbar from "@src/components/Navbar/Navbar";
import { BlogTypeEnum } from "@src/utils/interfaces";
import { FC } from "react";

import styles from "./BlogPage.module.scss";
import SubscribeNews from "@src/components/SubscribeNews/SubscribeNews";

const BlogPage: FC = () => {
  return (
    <section>
      <Navbar />
      <Title align="center" style={{ margin: "80px 0 60px 0" }}>
        <h2>Our blog</h2>
        <h3>Createx School Journal</h3>
      </Title>

      <div className="blogToolbox">
        <div className="container">
          {/* TODO: не работает переключение табов */}
          <BlogToolbox type={BlogTypeEnum.All} />
        </div>
      </div>

      <div className={styles.postsList}>
        <div className="container">
          {/* TODO: настроить grid или что-то похожее */}
          <ItemsList type="blog" limit={9} />
        </div>

        {/* pagination */}
      </div>

      {/* subscribe newsletters */}
      <div className={styles.newsletters}>
        <div className="container">
          <SubscribeNews />
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
