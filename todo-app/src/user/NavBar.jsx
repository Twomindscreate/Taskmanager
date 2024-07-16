import React from "react";

const NavBar = () => {
  return (
    <div>
      <nav>
        <ul className="d-flex flex-row items-center">
          <li>
            <a href={`/`}>List</a>
          </li>
          <li>
            <a href={`/add-user`}>Add to teams</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
