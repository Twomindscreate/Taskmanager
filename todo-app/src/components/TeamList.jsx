// src/components/TeamList.js
import React from "react";
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Container,
} from "reactstrap";

const TeamList = ({ teams, onEdit, onDelete }) => {
  return (
    <div className="container">
      <h1>Teams</h1>
      <p>Here are all the teams in your company:</p>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => (
            <tr key={index}>
              <td>{team.name}</td>
              <td>{team.description}</td>
              <td>
                <button color="warning" onClick={() => onEdit(team)}>
                  Edit
                </button>
                <button color="danger" onClick={() => onDelete(team.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    //   <ListGroup>
    //     {teams.map((team, index) => (
    //       <ListGroupItem key={index}>
    //         <ListGroupItemHeading>{team.name}</ListGroupItemHeading>
    //         <ListGroupItemText>{team.description}</ListGroupItemText>
    //       </ListGroupItem>
    //     ))}
    //   </ListGroup>
    // </Container>
  );
};

export default TeamList;
