import ToolboxTabs from "@src/UI/Tabs/ToolboxTab/ToolboxTab";
import { BlogTypeEnum, CourseTypeEnum } from "@src/utils/interfaces";
import { FC } from "react";

import styles from "./BlogToolbox.module.scss";
import Select from "@src/UI/Form/Select/Select";
import Input from "@src/UI/Form/Input/Input";

import video from "@assets/blog/video.svg";
import article from "@assets/blog/article.svg";
import podcast from "@assets/blog/podcast.svg";

interface IBlogToolboxProps {
  type: BlogTypeEnum;
}

const BlogToolbox: FC<IBlogToolboxProps> = ({ type }) => {
  return (
    <div className={styles.toolbox}>
      <ToolboxTabs
        className={styles.tabs}
        values={[
          { text: BlogTypeEnum.All },
          { text: BlogTypeEnum.Article, icon: article },
          { text: BlogTypeEnum.Video, icon: video },
          { text: BlogTypeEnum.Podcast, icon: podcast },
        ]}
        defaultValue={type}
      />

      <div className={styles.toolboxRight}>
        <div className={styles.toolboxItem}>
          <label htmlFor="themes">Blog category</label>

          <Select
            className={styles.toolboxSelect}
            id="themes"
            values={[
              "All themes",
              CourseTypeEnum.Design,
              CourseTypeEnum.Development,
              CourseTypeEnum.Management,
              CourseTypeEnum.Marketing,
              CourseTypeEnum.Recruting,
            ]}
          />
        </div>

        <Input width="50%" image="search" placeholder="Search blog..." type="search" />
      </div>
    </div>
  );
};

export default BlogToolbox;
