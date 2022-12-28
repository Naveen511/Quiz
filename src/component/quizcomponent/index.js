/*
 * This is the index page for the question list and the combination of title with switch in the header.
 */
import React from "react";

import DarkMode from "../../common/switch";
import Questions from "./questions";
import list from "../../utils/questionList";

const QuizComponent = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p style={{ marginRight: "10px", fontSize: "28px" }}>Quiz</p>
        <DarkMode />
      </div>
      <div>
        {list.length > 0 ? <Questions questionList={list} /> : "No Questions"}
      </div>
    </div>
  );
};

export default QuizComponent;
