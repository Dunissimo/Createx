import Title from "@src/UI/Title/Title";
import Navbar from "@src/components/Navbar/Navbar";
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

      {/* posts list */}

      {/* subscribe newsletters */}
    </section>
  );
};

export default BlogPage;
