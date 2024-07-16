import { useState } from "react";
import { BASE_URL } from "../utils";

const useTeams = () => {
  const [teams, setTeams] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const fetchTeams = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/api/teams`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setTeams(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const saveTeams = async (payload) => {
    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/api/teams/`, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: myHeaders,
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setTeams([...teams, data]);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const editTeam = async (id, payload) => {
    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/api/teams/${id}`, {
        method: "PUT",
        body: JSON.stringify(payload),
        headers: myHeaders,
      });

      // Check if response is not ok
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Get data from response
      const data = await response.json();
      console.log("Updated team data:", data); // Log updated data
      // Update the teams state with the new data
      const updatedTeams = teams.map((team) =>
        team._id === id ? { ...team, ...data } : team
      );

      setTeams(updatedTeams);
    } catch (error) {
      console.error("Error updating team:", error); // Log the error for debugging
    } finally {
      setLoading(false); // Ensure loading state is reset
    }
  };

  const deleteTeam = async (id) => {
    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/api/teams/${id}`, {
        method: "DELETE",
        headers: myHeaders,
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      setTeams(teams.filter((team) => team.id !== id));
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
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
