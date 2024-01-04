import company2 from "@assets/companies/logo-1.svg";
import company3 from "@assets/companies/logo-2.svg";
import company1 from "@assets/companies/logo.svg";
import Row from "@src/UI/Row/Row";
import RowItem from "@src/UI/Row/RowItem/RowItem";
import SocialMedia from "@src/UI/SocialMedia/SocialMedia";
import Title from "@src/UI/Title/Title";
import { ICurator, ISpeaker } from "@src/utils/interfaces";
import { FC } from "react";
import Skeleton from "react-loading-skeleton";
import styles from "./Person.module.scss";

interface IPersonProps {
  isLoading?: boolean;
  person?: ICurator | ISpeaker;
  imgLink?: string;
}

const Person: FC<IPersonProps> = ({ isLoading, person, imgLink }) => {
  return (
    <div className="container">
      <Row className={styles.curatorRow}>
        <RowItem className={styles.curatorImg}>
          {isLoading ? <Skeleton height={500} /> : <img src={imgLink} alt="" />}
        </RowItem>

        <RowItem className={styles.curatorInfo}>
          {isLoading ? (
            <Skeleton height={500} />
          ) : (
            <>
              <Title style={{ color: "#1e212c", marginBottom: "16px" }}>
                <h2>course curator</h2>
                <h3>{person?.name}</h3>
              </Title>

              <span>{person?.job}</span>

              {"rating" in person! ? (
                <ul className={styles.stats}>
                  <li>{person?.rating} rate</li>
                  <li>{person?.coursesCount} courses</li>
                  <li>{person?.studentsCount} students</li>
                </ul>
              ) : null}

              <p>{person?.text}</p>

              {!("rating" in person!) ? (
                <div
                  style={{
                    display: "flex",
                    gap: "1.5rem",
                    filter: "brightness(0.5) saturate(0%)",
                    marginBottom: "40px",
                  }}
                >
                  <img src={company1} alt="" />
                  <img src={company2} alt="" />
                  <img src={company3} alt="" />
                </div>
              ) : null}

              <div className={styles.social}>
                <SocialMedia social="facebook" className="curator" />
                <SocialMedia social="behance" className="curator" />
                <SocialMedia social="twitter" className="curator" />
                <SocialMedia social="instagram" className="curator" />
              </div>
            </>
          )}
        </RowItem>
      </Row>
    </div>
  );
};

export default Person;
