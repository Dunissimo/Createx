import { FC } from "react";

import { ITeam } from "@utils/interfaces";
import { useUrl } from "@utils/hooks";
import SocialMedia from "@ui/SocialMedia/SocialMedia";

import styles from "./Team.module.scss";

interface IProps {
  team: ITeam;
}

const Team: FC<IProps> = ({ team }) => {
  const url = useUrl(`team/${team.imgName}`);

  return (
    <div className={styles.team}>
      <div className={styles.bg}>
        <img src={url} alt="" />
        <div className={styles.social}>
          <div className="">
            <SocialMedia className="team" social="facebook" />
            <SocialMedia className="team" social="instagram" />
            <SocialMedia className="team" social="linkedIn" />
          </div>
        </div>
      </div>
      <h3>{team.name}</h3>
      <p>{team.job}</p>
    </div>
  );
};

export default Team;
