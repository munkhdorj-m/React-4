import React from "react";
import { useState } from "react";
import Header from "../header/Header";

const Search = (props) => {
  const [searchTerm, setSearchterm] = useState("");

  return (
    <div className="App">
      <button
        onClick={() => {
          props.navigate("/example");
        }}
      >
        Change to Example Page
      </button>
      <Header />
      <input
        type="text"
        placeholder="Search..."
        onChange={(event) => {
          setSearchterm(event.target.value);
        }}
      />
      {window.cs142models
        .statesModel()
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

export default Search;
