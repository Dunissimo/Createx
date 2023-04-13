import { FC } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "../../UI/Button/Button";
import clsx from "clsx";

import styles from "./Navbar.module.scss";

import darkLogo from "../../assets/dark-logo.svg";
import lightLogo from "../../assets/light-logo.svg";
import darkPerson from "../../assets/icons/dark-person.svg";
import lightPerson from "../../assets/icons/light-person.svg";

interface IProps {
  theme?: "dark" | "light";
}

const Navbar: FC<IProps> = ({ theme = "light" }) => {
  return (
    <div className={clsx(styles.navbar, styles[`navbar-${theme}`])}>
      <div className="container flex-row items-center justify-between">
        <div className="logo">
          <Link to="/">
            {theme === "dark" ? (
              <img src={lightLogo} alt="createx logo" />
            ) : (
              <img src={darkLogo} alt="createx logo" />
            )}
          </Link>
        </div>
        <nav className={styles.nav}>
          <li>
            <NavLink to="/about">About us</NavLink>
          </li>
          <li>
            <NavLink to="/courses">Courses</NavLink>
          </li>
          <li>
            <NavLink to="/events">Events</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/contacts">Contacts</NavLink>
          </li>
        </nav>
        <div className={styles.auth}>
          <Button settings={{ size: "xl" }}>Get consultation</Button>
          <Button settings={{ simple: true }}>
            {theme === "dark" ? (
              <img src={lightPerson} alt="" />
            ) : (
              <img src={darkPerson} alt="" />
            )}
            Log in / Register
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
