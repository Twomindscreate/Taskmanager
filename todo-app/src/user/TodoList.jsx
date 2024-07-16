import { useEffect, useMemo } from "react";
import { useTeams } from "../hooks";
import TeamsForm from "../components/TeamsForm";
import NavBar from "./NavBar";

const TodoList = () => {
  const { isLoading, teams, fetchTeams, saveTeams } = useTeams();
  useEffect(() => {
    fetchTeams();
  }, []);

  const loadedTeams = useMemo(() => {
    return teams?.length ? teams : [];
  }, [isLoading]);

  const handleTeam = (payload) => {
    saveTeams(payload);
  };

  console.log("-teams", loadedTeams);
  return (
    <div>
      {isLoading ? (
        <div>Is loading...</div>
      ) : (
        <div>
          <NavBar />
          <div>My Teams</div>
          <TeamsForm handleTeam={handleTeam} />
          <div className="border border-black">
            {loadedTeams?.map((el) => {
              return (
                <div key={el.id}>
                  <div>Team Name - {el.name}</div>
                  <div>Description - {el.description}</div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoList;
