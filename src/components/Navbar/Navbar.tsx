import { FC } from "react";
import { NavLink } from "react-router-dom";
import Button from "../../UI/Button/Button";

const Navbar: FC = () => {
  return (
    <div className="container flex-row items-center justify-between">
      <div className="logo"></div>
      <nav className="nav">
        <li>
          <NavLink to="/about">About us</NavLink>
          <NavLink to="/courses">Courses</NavLink>
          <NavLink to="/events">Events</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/contacts">Contacts</NavLink>
        </li>
      </nav>
      <div className={""}>
        <Button size="xl">Get consultation</Button>
        <Button simple>Log in / Register</Button>
      </div>
    </div>
  );
};

export default Navbar;
