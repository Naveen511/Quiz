import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Question from "../component/quizcomponent/index";
import Result from "../component/quizcomponent/result";

import { navRef } from "./ref";

const Rout = (props) => {
  return (
      <Router ref={navRef}>
        <Routes>
          <Route path="/" element={<Question />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </Router>
  );
};
export default Rout;
