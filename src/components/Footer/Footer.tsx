import { FC } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import SocialMedia from "@ui/SocialMedia/SocialMedia";
import Input from "@ui/Form/Input/Input";
import Button from "@ui/Button/Button";

import { handleSmoothLinkClick } from "@utils/helpers";

import styles from "./Footer.module.scss";

import logo from "@assets/light-logo.svg";
import phone from "@assets/icons/phone.svg";
import email from "@assets/icons/email.svg";
import love from "@assets/icons/love.svg";
import { CourseTypeEnum } from "@src/utils/interfaces";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={clsx(styles.body, "container")}>
        <div className={styles.info}>
          <img src={logo} alt="" />
          <p>
            Createx Online School is a leader in online studying. We have lots
            of courses and programs from the main market experts. We provide
            relevant approaches to online learning, internships and employment
            inthe largest companies in the country.
          </p>
          <div className={styles.socialMedia}>
            <SocialMedia className="footer" social="facebook" />
            <SocialMedia className="footer" social="twitter" />
            <SocialMedia className="footer" social="youtube" />
            <SocialMedia className="footer" social="telegram" />
            <SocialMedia className="footer" social="instagram" />
            <SocialMedia className="footer" social="linkedIn" />
          </div>
        </div>

        <div className={styles.map}>
          <h2>Site map</h2>
          <nav>
            <li>
              <Link onClick={handleSmoothLinkClick} to="/about">
                About us
              </Link>
            </li>
            <li>
              <Link onClick={handleSmoothLinkClick} to="/courses">
                Courses
              </Link>
            </li>
            <li>
              <Link
                onClick={handleSmoothLinkClick}
                to="/events?orientation=horizontal&perPage=9"
              >
                Events
              </Link>
            </li>
            <li>
              <Link onClick={handleSmoothLinkClick} to="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link onClick={handleSmoothLinkClick} to="/contacts">
                Contacts
              </Link>
            </li>
          </nav>
        </div>

        <div className={styles.courses}>
          <h2>Courses</h2>
          <ul>
            <li>
              <Link
                onClick={handleSmoothLinkClick}
                to={`/courses?type=${CourseTypeEnum.Marketing}`}
              >
                Marketing
              </Link>
            </li>
            <li>
              <Link
                onClick={handleSmoothLinkClick}
                to={`/courses?type=${CourseTypeEnum.Management}`}
              >
                Management
              </Link>
            </li>
            <li>
              <Link
                onClick={handleSmoothLinkClick}
                to={`/courses?type=${CourseTypeEnum.Recruting}`}
              >
                HR & Recruting
              </Link>
            </li>
            <li>
              <Link
                onClick={handleSmoothLinkClick}
                to={`/courses?theme=${CourseTypeEnum.Design}`}
              >
                Design
              </Link>
            </li>
            <li>
              <Link
                onClick={handleSmoothLinkClick}
                to={`/courses?type=${CourseTypeEnum.Development}`}
              >
                Development
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.contact}>
          <h2>Contact us</h2>
          <p>
            <img src={phone} alt="" /> (405) 555-0128
          </p>
          <p>
            <img src={email} alt="" /> hello@createx.com
          </p>
        </div>

        <div className={styles.news}>
          <h2>SIGN UP TO OUR NEWSLETTER</h2>
          <form action="post" onSubmit={(e) => e.preventDefault()}>
            <Input
              image="arrow"
              imageAsSubmit
              theme="dark"
              placeholder="Email address"
            />
          </form>
          <p>
            *Subscribe to our newsletter to receive communications and early{" "}
            <br />
            updates from Createx SEO Agency.
          </p>
        </div>
      </div>
      <div className={styles.footerFoot}>
        <div className={clsx("container", styles.footerContainer)}>
          <p>
            © All rights reserved. Made with <img src={love} alt="" /> by{" "}
            <Link target="_blank" to="https://github.com/Dunissimo">
              Dunissimo
            </Link>
          </p>
          <Button onClick={handleSmoothLinkClick} simple>
            GO TO TOP
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
