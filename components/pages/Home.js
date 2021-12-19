import React from "react";

import { useNavigate, Route, Routes } from "react-router-dom";
import Example from "../example/Example";
import Switches from "./Switches";
import States from "../states/States";

const Home = () => {
  let navigate = useNavigate();
  return (
    <div>
      <Routes>
        <Route path="/p4.html" element={<Switches navigate={navigate} />} />
        <Route path="/" element={<Switches navigate={navigate} />} />
        <Route path="/states" element={<States navigate={navigate} />} />
        <Route path="/example" element={<Example navigate={navigate} />} />
      </Routes>
    </div>
  );
};

export default Home;
