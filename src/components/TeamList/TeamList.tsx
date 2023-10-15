import { FC } from "react";
import Team from "@ui/Team/Team";

import styles from "./TeamList.module.scss";
import { useGetTeamQuery } from "@src/api/team";

interface IProps {
  limit?: number | string;
  cardWidth?: string;
}

const TeamList: FC<IProps> = ({ limit = 4, cardWidth = "25%" }) => {
  const { data, isError, isLoading } = useGetTeamQuery();

  if (isError) {
    return <h1>Error!</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className={styles.list}>
      {data?.slice(0, +limit).map((team) => (
        <div key={team.id} style={{ width: cardWidth }}>
          <Team team={team} />
        </div>
      ))}
    </div>
  );
};

export default TeamList;
