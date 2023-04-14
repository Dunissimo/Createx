import { FC } from "react";

import styles from "./Team.module.scss";
import people from "../../assets/peopleTeam/bell.svg";
import SocialMedia from "../SocialMedia/SocialMedia";
const Team: FC = () => {
  return (
    <div className={styles.team}>
      <div className={styles.bg}>
        <img src={people} alt="" />
        <div className={styles.social}>
          <div className="">
            <SocialMedia className="team" social="facebook" />
            <SocialMedia className="team" social="instagram" />
            <SocialMedia className="team" social="linkedIn" />
          </div>
        </div>
      </div>
      <h3>Dianne Russell</h3>
      <p>Founder and CEO</p>
    </div>
  );
};

export default Team;
