import React from "react";
import { useState } from "react";
import Header from "../header/Header";

const search = () => {
  const [searchTerm, setSearchterm] = useState("");
  const states = window.cs142models.statesModel();
  const noRes = "no";
  return (
    <div className="App">
      <Header />
      <input
        type="text"
        placeholder="Search..."
        onChange={(event) => {
          setSearchterm(event.target.value);
        }}
      />
      {states
        .filter((val) => {
          if (searchTerm == "") {
            return val;
          } else if (val.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val;
          }
        })
        .map((val, key) => {
          return (
            <div className="user" key={key}>
              <p>{val}</p>
            </div>
          );
        })}
    </div>
  );
};

export default search;

{
  /* <div>No Result</div>; */
}
