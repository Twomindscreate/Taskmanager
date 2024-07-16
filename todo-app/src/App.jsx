// import { useEffect, useMemo, useState } from "react";
// import { useTeams } from "./hooks";
// import "./App.css";
// import TeamsForm from "./components/TeamsForm";

// function App() {
//   const { isLoading, teams, fetchTeams, saveTeams } = useTeams();
//   useEffect(() => {
//     fetchTeams();
//   }, []);

//   const loadedTeams = useMemo(() => {
//     return teams?.length ? teams : [];
//   }, [isLoading]);

//   const handleTeam = (payload) => {
//     saveTeams(payload);
//   };

//   console.log("-teams", loadedTeams);
//   return (
//     <>
//       {isLoading ? (
//         <div>Is loading...</div>
//       ) : (
//         <div>
//           <div>My Teams</div>

//           <TeamsForm handleTeam={handleTeam} />
//           <div className="border border-black">
//             {loadedTeams?.map((el) => {
//               return (
//                 <div key={el.id}>
//                   <div>Team Name - {el.name}</div>
//                   <div>Description - {el.description}</div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default App;

// src/App.js
import React from "react";
import TeamManager from "./components/TeamManager";

const App = () => {
  return (
    <div>
      <TeamManager />
    </div>
  );
};

export default App;
