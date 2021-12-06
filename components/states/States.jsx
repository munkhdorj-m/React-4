import React from "react";
import "./States.css";

import Search from "./Search";
import Header from "../header/Header";

class States extends React.Component {
  constructor(props) {
    super(props);
    console.log(
      "window.cs142models.statesModel()",
      window.cs142models.statesModel()
    );
  }

  render() {
    return <Search />;
  }
}

export default States;
