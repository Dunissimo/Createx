import { FC } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

import styles from "./SocialMedia.module.scss";

import yotube from "@assets/icons/YouTube.svg";
import twitter from "@assets/icons/Twitter.svg";
import facebook from "@assets/icons/Facebook.svg";
import telegram from "@assets/icons/telegram.svg";
import instagram from "@assets/icons/Instagram.svg";
import linkedIn from "@assets/icons/Linked-In.svg";

const links = {
  youtube: {
    link: "https://www.youtube.com/",
    img: yotube,
  },
  twitter: {
    link: "https://twitter.com/",
    img: twitter,
  },
  facebook: {
    link: "https://www.facebook.com",
    img: facebook,
  },
  telegram: {
    link: "https://web.telegram.org/",
    img: telegram,
  },
  instagram: {
    link: "https://instagram.com/",
    img: instagram,
  },
  linkedIn: {
    link: "https://www.linkedin.com/",
    img: linkedIn,
  },
};

const images = {};

interface IProps {
  social:
    | "youtube"
    | "twitter"
    | "facebook"
    | "telegram"
    | "instagram"
    | "linkedIn";
  className: string;
}

const SocialMedia: FC<IProps> = ({ social, className }) => {
  return (
    <Link
      to={links[social].link}
      className={clsx(styles.social, styles[className])}
    >
      <img src={links[social].img} alt={`${social} icon`} />
    </Link>
  );
};

export default SocialMedia;
