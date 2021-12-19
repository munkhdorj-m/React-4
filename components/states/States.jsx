import React from "react";
import "./States.css";

import Search from "./Search";

class States extends React.Component {
  constructor(props) {
    super(props);
    console.log(
      "window.cs142models.statesModel()",
      window.cs142models.statesModel()
    );
  }

  render() {
    return <Search navigate={this.props.navigate} />;
  }
}

export default States;
