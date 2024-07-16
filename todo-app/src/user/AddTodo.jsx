import React from "react";
import NavBar from "./NavBar";

const AddTodo = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <label>
        <input
          type="text"
          placeholder="Team name"
          className="ml-5 p-3  pl-6 pr-6 rounded-[8px] border border-black"
        />
      </label>
      <label>
        <input
          type="text"
          placeholder="Team description"
          className="ml-5 p-3  pl-6 pr-6 rounded-[8px] border border-black"
        />
      </label>
      <button className="ml-5 p-3  pl-6 pr-6 rounded-[8px] border border-black">
        Add
      </button>
    </div>
  );
};

export default AddTodo;
