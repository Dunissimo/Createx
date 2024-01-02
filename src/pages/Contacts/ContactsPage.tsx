import Button from "@src/UI/Button/Button";
import Input from "@src/UI/Form/Input/Input";
import Textarea from "@src/UI/Form/Textarea/Textarea";
import Row from "@src/UI/Row/Row";
import RowItem from "@src/UI/Row/RowItem/RowItem";
import SocialMedia from "@src/UI/SocialMedia/SocialMedia";
import Title from "@src/UI/Title/Title";
import Navbar from "@src/components/Navbar/Navbar";
import { FC } from "react";

import styles from "./ContactsPage.module.scss";

import img from "@assets/illustration-contacts.svg";

const ContactsPage: FC = () => {
  return (
    <section>
      <Navbar />

      {/* contact info */}
      <div className="container">
        <Row className={styles.contacts}>
          <RowItem>
            <Title>
              <h2>Contact info</h2>
              <h3>Get in touch</h3>
            </Title>

            <ul className={styles.contactsInfo}>
              <li>
                <span>Talk to us:</span>
                <span>hello@createx.com</span>
              </li>

              <li>
                <span>Call us:</span>
                <span>(405) 555-0128</span>
              </li>

              <li>
                <span>Address:</span>
                <span>2464 Royal Ln. Mesa, New Jersey 45463, USA</span>
              </li>
            </ul>

            <div className={styles.media}>
              <h3>Follow us:</h3>

              <div>
                <SocialMedia social="facebook" />
                <SocialMedia social="twitter" />
                <SocialMedia social="youtube" />
                <SocialMedia social="telegram" />
                <SocialMedia social="instagram" />
                <SocialMedia social="linkedIn" />
              </div>
            </div>
          </RowItem>

          <RowItem>
            <div className={styles.map}></div>
          </RowItem>
        </Row>
      </div>

      {/* questions */}
      <div className="container">
        <div className={styles.questions}>
          <Row className={styles.questionsRow}>
            <RowItem width="40%">
              <img src={img} alt="" />
            </RowItem>

            <RowItem width="60%">
              <Title>
                <h2>Any questions?</h2>
                <h3>Drop us a line</h3>
              </Title>

              <form className={styles.form}>
                <div className="">
                  <div className={styles.formRow}>
                    <div className={styles.formInputDiv}>
                      <label htmlFor="firstName">First Name*</label>
                      <Input
                        id="firstName"
                        placeholder="Your first name"
                        className={styles.formInput}
                      />
                    </div>

                    <div className={styles.formInputDiv}>
                      <label htmlFor="lastName">Last name*</label>
                      <Input
                        id="lastName"
                        placeholder="Your last name"
                        className={styles.formInput}
                      />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formInputDiv}>
                      <label htmlFor="email">Email*</label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your working email"
                        className={styles.formInput}
                      />
                    </div>

                    <div className={styles.formInputDiv}>
                      <label htmlFor="phone">Phone</label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Your phone number"
                        className={styles.formInput}
                      />
                    </div>
                  </div>
                </div>

                <div className={styles.formTextareaDiv}>
                  <label htmlFor="message">Message*</label>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    className={styles.formTextarea}
                    rows={5}
                  />
                </div>

                <div className={styles.formFooter}>
                  <div className={styles.formCheckboxDiv}>
                    <Input id="receive" type="checkbox" />

                    <label htmlFor="receive">
                      I agree to receive communications from <br /> Createx Online School
                    </label>
                  </div>

                  <Button type="submit">Send message</Button>
                </div>
              </form>
            </RowItem>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default ContactsPage;
