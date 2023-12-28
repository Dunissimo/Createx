import { FC } from "react";

import SocialMedia from "@ui/SocialMedia/SocialMedia";
import { useUrl } from "@utils/hooks";
import { ITeam } from "@utils/interfaces";

import styles from "./Team.module.scss";

interface IProps {
  team: ITeam;
  className?: string;
}

const Team: FC<IProps> = ({ team, className }) => {
  const url = useUrl(`team/${team.imgName}`);

  return (
    <div className={`${styles.team} ${className || ""}`}>
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
