import React from "react";
import "./styles/main.css";
import ReactDOM from "react-dom";

import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Link,
} from "react-router-dom";
import Home from "./components/pages/Home";

ReactDOM.render(
  <HashRouter>
    <Home />
  </HashRouter>,
  document.getElementById("reactapp4")
);
