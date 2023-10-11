import { FC, useEffect } from "react";
import { fetchTeam } from "@redux/slices/teamSlice";
import { useAppDispatch, useAppSelector } from "@utils/hooks";
import Team from "@ui/Team/Team";

import styles from "./TeamList.module.scss";

interface IProps {
  limit?: number | string;
  cardWidth?: string;
}

const TeamList: FC<IProps> = ({ limit = 4, cardWidth = "25%" }) => {
  const dispatch = useAppDispatch();
  const { team, loading, error } = useAppSelector((state) => state.team);

  useEffect(() => {
    dispatch(fetchTeam());
  }, []);

  // TODO: переписать useEffect на RTK Query || axios

  if (error) {
    return <h1>Error!</h1>;
  }

  return (
    <div className={styles.list}>
      {loading && <div>Loading...</div>}
      {team.slice(0, +limit).map((team) => (
        <div key={team.id} style={{ width: cardWidth }}>
          <Team team={team} />
        </div>
      ))}
    </div>
  );
};

export default TeamList;
