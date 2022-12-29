import React from "react";
import { BrowserRouter as Router, Route, Routes, HashRouter } from "react-router-dom";

import Question from "../component/quizcomponent/index";
import Result from "../component/quizcomponent/result";

import { navRef } from "./ref";

const Rout = (props) => {
  return (
    <>
      <HashRouter ref={navRef} basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Question />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </HashRouter>
    </>
  );
};
export default Rout;
