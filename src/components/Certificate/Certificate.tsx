import { FC } from "react";
import Row from "@ui/Row/Row";
import Title from "@ui/Title/Title";
import RowItem from "@ui/Row/RowItem/RowItem";

import styles from "./Certificate.module.scss";

import logo1 from "@assets/companies/logo.svg";
import logo2 from "@assets/companies/logo-1.svg";
import logo3 from "@assets/companies/logo-2.svg";
import certificate from "@assets/certificate.png";

const Certificate: FC = () => {
  return (
    <section className={styles.certificate}>
      <div className="container">
        <Row>
          <RowItem>
            <div className={styles.certificateInfo}>
              <Title>
                <h2>Createx Certificate</h2>
                <h3>Your expertise will be confirmed</h3>
              </Title>
              <p>
                We are accredited by international professional organizations
                and institutes:
              </p>
              <div className={styles.imgDiv}>
                <img src={logo1} alt="" />
                <img src={logo2} alt="" />
                <img src={logo3} alt="" />
              </div>
            </div>
          </RowItem>

          <RowItem className={styles.certificateDiv}>
            <img className={styles.certificateImg} src={certificate} alt="" />
          </RowItem>
        </Row>
      </div>
    </section>
  );
};

export default Certificate;
