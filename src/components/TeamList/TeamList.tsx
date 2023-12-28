import { useGetTeamQuery } from "@src/api/team";
import Team from "@ui/Team/Team";
import { FC } from "react";
import Skeleton from "react-loading-skeleton";

import "react-loading-skeleton/dist/skeleton.css";
import styles from "./TeamList.module.scss";

interface IProps {
  limit?: number | string;
}

const TeamList: FC<IProps> = ({ limit = 4 }) => {
  const { data, isError, isLoading } = useGetTeamQuery();

  if (isError) {
    return <h1>Error!</h1>;
  }

  return (
    <div className={styles.list}>
      {data?.slice(0, Number(limit)).map((team) => (
        <div key={team.id} className={styles.teamItem}>
          {isLoading ? (
            new Array(1)
              .fill(0)
              .map((_, index) => (
                <Skeleton
                  key={index}
                  baseColor="#dee1e3"
                  highlightColor="#ebeef0"
                  count={1}
                  height={300}
                />
              ))
          ) : (
            <Team team={team} />
          )}
        </div>
      ))}
    </div>
  );
};

export default TeamList;
