import React from "react";
import "./styles/main.css";
import ReactDOM from "react-dom";

import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/pages/Home";

ReactDOM.render(
  <Router>
    <Home />
  </Router>,
  document.getElementById("reactapp4")
);
