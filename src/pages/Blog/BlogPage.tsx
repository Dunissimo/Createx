import Title from "@src/UI/Title/Title";
import BlogToolbox from "@src/components/BlogToolbox/BlogToolbox";
import Navbar from "@src/components/Navbar/Navbar";
import { BlogTypeEnum } from "@src/utils/interfaces";
import { FC } from "react";

const BlogPage: FC = () => {
  return (
    <section>
      <Navbar />

      <Title align="center" style={{ margin: "80px 0 60px 0" }}>
        <h2>Our blog</h2>
        <h3>Createx School Journal</h3>
      </Title>

      {/* Toolbar */}
      <div className="blogToolbox container">
        <BlogToolbox type={BlogTypeEnum.All} />
      </div>

      {/* posts list */}

      {/* subscribe newsletters */}
    </section>
  );
};

export default BlogPage;
