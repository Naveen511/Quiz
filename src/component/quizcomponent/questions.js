/*
* This file contains the list of question and the answer has been handled based on the user action.
*/
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

const Questions = (props) => {
  const navigate = useNavigate();
  const [answer, setAnswer] = useState([]);

  /**
   * Handles the answer choosen for each of the questions
   * @param {*} event the selected value
   * @param {*} id  the question id
   */
  const handleAnswer = (event, id) => {
    // check the length is greater than 0
    if (answer.length > 0) {
        // find the index which is selected one more time
      const index = answer.findIndex((_el) => _el.questionId === id);
      if (index > -1) {
        const newAns = [...answer];
        // updated only the answer if the question id already exist
        newAns[index].answer = event.target.value;
        setAnswer(newAns);
      } else {
        let obj;

        obj = {
          questionId: id,
          answer: event.target.value,
        };
        setAnswer([...answer, obj]);
      }
    } else {
      let obj = {
        questionId: id,
        answer: event.target.value,
      };
      setAnswer([...answer, obj]);
    }
  };

  const reset = () => {
    setAnswer([]);
    window.location.reload();
  };

  React.useEffect(() => {
    console.log("common state", answer);
  }, [answer]);

  return (
    <div style={{ padding: "20px" }}>
      {props.questionList.map((data, index) => {
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
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={answer.answer}
                onChange={(e) => handleAnswer(e, data.id)}
              >
                {data.option.map((options, i) => {
                  return (
                    <FormControlLabel
                      value={options}
                      control={<Radio />}
                      label={options}
                      style={{ fontSize: "16px" }}
                    />
                  );
                })}
              </RadioGroup>
            </FormControl>
          </Paper>
        );
      })}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="outlined"
          onClick={() => reset()}
          style={{ marginRight: "20px" }}
        >
          Reset
        </Button>
        <Button
          variant="outlined"
          onClick={() => navigate("/result", { state: { answerList: answer } })}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Questions;
