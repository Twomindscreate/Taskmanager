import React, { useEffect, useState } from "react"; // Make sure useState is imported
import TeamsForm from "./TeamsForm";
import TeamList from "./TeamList";
import useTeams from "../hooks/useTeams";

const TeamManager = () => {
  const { fetchTeams, saveTeams, editTeam, deleteTeam, teams, isLoading } =
    useTeams();
  const [currentTeam, setCurrentTeam] = useState(null);

  useEffect(() => {
    fetchTeams();
  }, []);

  const handleTeam = (team) => {
    if (currentTeam) {
      editTeam(currentTeam.id, team);
      setCurrentTeam(null);
    } else {
      saveTeams(team);
    }
  };

  const handleEdit = (team) => {
    setCurrentTeam(team);
  };

  const handleDelete = (id) => {
    deleteTeam(id);
  };

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      <TeamsForm handleTeam={handleTeam} currentTeam={currentTeam} />
      <TeamList teams={teams} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default TeamManager;
