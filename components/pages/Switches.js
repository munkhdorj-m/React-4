import React from "react";

import "../example/Example.css";

const Switches = (props) => {
  return (
    <div className="main">
      <button
        className="bn3637 bn37"
        onClick={() => {
          props.navigate("/states");
        }}
      >
        Change to State Page
      </button>
      <button
        className="bn3637 bn37"
        onClick={() => {
          props.navigate("/example");
        }}
      >
        Change to Example Page
      </button>
    </div>
  );
};

export default Switches;
