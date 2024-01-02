/* eslint-disable react/no-unescaped-entities */
import Button from "@ui/Button/Button";
import clsx from "clsx";
import { FC } from "react";
import { Link, NavLink } from "react-router-dom";

import styles from "./Navbar.module.scss";

import darkLogo from "@assets/dark-logo.svg";
import darkPerson from "@assets/icons/dark-person.svg";
import lightPerson from "@assets/icons/light-person.svg";
import lightLogo from "@assets/light-logo.svg";

interface IProps {
  theme?: "dark" | "light";
}

const Navbar: FC<IProps> = ({ theme = "light" }) => {
  const classs = (isActive: boolean) =>
    clsx({
      [styles.active]: isActive,
    });

  return (
    <header className={clsx(styles.navbar, styles[`navbar-${theme}`])}>
      <div className={`container ${styles.navbarContainer}`}>
        <nav className={styles.nav}>
          <Link to="/">
            {theme === "dark" ? (
              <img src={lightLogo} width={130} alt="createx logo" />
            ) : (
              <img src={darkLogo} width={130} alt="createx logo" />
            )}
          </Link>
          <li className={styles.first}>
            <NavLink className={({ isActive }) => classs(isActive)} to="/about">
              About us
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => classs(isActive)}
              to="/courses?type=All"
            >
              Courses
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => classs(isActive)}
              to="/events?orientation=horizontal&type=All"
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => classs(isActive)} to="/blog?type=All">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => classs(isActive)} to="/contacts">
              Contacts
            </NavLink>
          </li>
        </nav>

        <div className={styles.burger} style={{ textAlign: "center" }}>
          <p>Here'll be Burger menu Please wait</p>
        </div>

        <div className={styles.auth}>
          <Button size="xl">Get consultation</Button>
          <Button simple style={{ display: "block" }}>
            {theme === "dark" ? (
              <img src={lightPerson} width={20} alt="" />
            ) : (
              <img src={darkPerson} width={20} alt="" />
            )}
            Log in / Register
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
