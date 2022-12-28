/*
* This file contains the result of the seleted answers
*/
import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import FormControl from "@mui/material/FormControl";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import questionList from "../../utils/questionList";
import { navigate } from "../../routes/ref";

const Result = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dataList = location.state.answerList;

  /**
   * This function deals on finding of same question id and the answer id
   * @param {*} data 
   * @returns boolean
   */
  const validate = (data) => {
    const found = dataList.some((el) => el.questionId === data.id);
    return found;
  };

  return (
    <div style={{ padding: "20px" }}>
      {questionList.map((data, index) => {
        return (
          <Paper
            variant="outlined"
            elevation={1}
            style={{ marginBottom: "10px", marginLeft: "10px" }}
          >
            <div
              className="questionStyle"
              style={{
                backgroundColor: "rgba(0,0,0,.03)",
                display: "flex",
                alignItems: "center",
                height: "50px",
              }}
            >
              <p
                style={{ fontSize: "16px", marginLeft: "10px", color: "black" }}
                className="questions"
              >{`Question ${data.id}`}</p>
            </div>
            <hr style={{ padding: 0, margin: 0 }} />
            <FormControl style={{ marginLeft: "50px" }}>
              <div>
                <p
                  style={{
                    fontSize: "20px",
                    fontColor: "black",
                    fontWeight: 600,
                  }}
                >
                  {data.question}
                </p>
              </div>
              <div>
                {dataList
                  .filter((x) => x.questionId == data.id)
                  .map((x) =>
                    x.answer === data.correctAnswer ? (
                      <>
                        <p>
                          Selected Answer:{" "}
                          {x.questionId == data.id ? x.answer : null}
                        </p>
                        <p style={{ color: "green", fontWeight: 600 }}>
                          You have Selected Correct Answer !!
                        </p>
                      </>
                    ) : (
                      <>
                        <p style={{ color: "red", fontWeight: 600 }}>
                          The answer you have selected is Incorrect !!
                        </p>
                        <p style={{ color: "green", fontWeight: 600 }}>
                          Correct Answer is: {data.correctAnswer}
                        </p>
                      </>
                    )
                  )}
                {validate(data) ? (
                  ""
                ) : (
                  <p style={{ color: "blue", fontWeight: 600 }}>
                    User Did Not Attempted
                  </p>
                )}
              </div>
            </FormControl>
          </Paper>
        );
      })}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          fullWidth
          variant="outlined"
          onClick={() => navigate("/")}
          style={{ backgroundColor: "rgba(0,0,0,.03)" }}
        >
          Back to Quiz
        </Button>
      </div>
    </div>
  );
};

export default Result;
