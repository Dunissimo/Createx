import { FC } from "react";
import Team from "@ui/Team/Team";
import { useGetTeamQuery } from "@src/api/team";
import Skeleton from "react-loading-skeleton";

import styles from "./TeamList.module.scss";
import "react-loading-skeleton/dist/skeleton.css";

interface IProps {
  limit?: number | string;
  cardWidth?: string;
}

const TeamList: FC<IProps> = ({ limit = 4, cardWidth = "25%" }) => {
  const { data, isError, isLoading } = useGetTeamQuery();

  if (isError) {
    return <h1>Error!</h1>;
  }

  return (
    <div className={styles.list}>
      {data?.slice(0, +limit).map((team) => (
        <div key={team.id} style={{ width: `calc(${cardWidth} - 15px)` }}>
          {isLoading ? (
            new Array(1)
              .fill(0)
              .map(() => (
                <Skeleton
                  baseColor="#dee1e3"
                  highlightColor="#ebeef0"
                  count={1}
                  height={400}
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
