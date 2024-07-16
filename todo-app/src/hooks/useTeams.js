import { useState } from "react";
import HttpService from "../utils/httpService";

const useTeams = () => {
  const [teams, setTeams] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const fetchTeams = async () => {
    HttpService("teams/", "get")
      .then(({ data }) => {
        setTeams(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const saveTeams = async (payload) => {
    setLoading(true);
    HttpService("teams/", "post", payload)
      .then(({ data }) => {
        setTeams([...teams, data]);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const editTeam = async (id, payload) => {
    setLoading(true);
    HttpService(`teams/${id}/`, "put", payload)
      .then(({ data }) => {
        const updatedTeams = teams.map((team) =>
          team.id === data.id ? { ...team, ...data } : team
        );
        setTeams(updatedTeams);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const deleteTeam = async (id) => {
    setLoading(true);
    HttpService(`teams/${id}`, "delete")
      .then(() => {
        setTeams(teams.filter((team) => team.id !== id));
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return {
    fetchTeams,
    saveTeams,
    editTeam,
    deleteTeam,
    teams,
    isLoading,
  };
};

export default useTeams;
