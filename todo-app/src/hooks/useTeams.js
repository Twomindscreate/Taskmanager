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
      setTeams([...teams, ...data]);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return {
    fetchTeams,
    saveTeams,
    teams,
    isLoading,
  };
};

export default useTeams;
