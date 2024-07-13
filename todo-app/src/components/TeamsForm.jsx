import React, { useState } from "react";

const TeamsForm = ({ handleTeam }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div>
      <input
        placeholder="Enter team name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Enter team description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={() => handleTeam({ name, description })}>
        Add Team
      </button>
    </div>
  );
};

export default TeamsForm;
