import React, { useEffect, useState } from "react";
import { Box, Card, Typography } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import "./question.scss";

import { useSelector, useDispatch } from "react-redux";
import {
  useFetchQuestion,
  MoveNextQuestion,
} from "../../hooks/FetchQuestion.js";
import { Navigate } from "react-router-dom";

const Question = () => {
  const [checked, setChecked] = useState(false);

  const [{ Loading, apiData, serverError }] = useFetchQuestion();

  const questions = useSelector(
    (state) => state.questions.queue[state.questions.trace]
  );

  const traces = useSelector((state) => state.questions.trace);
  const { queue, trace } = useSelector((state) => state.questions);
  const dispatch = useDispatch();

  useEffect(() => {
    // setSelected(QuestionData[0].data[0]);
    // console.log(questions);
    console.log(questions);
  });

  const onselect = (event) => {
    setChecked(event.target.checked);
  };

  const onNext = () => {
    console.log("On Next click");
    if (trace < queue.length) {
      dispatch(MoveNextQuestion()); //updating trace value by one using MoveNextAction
    }
    setChecked(false);
  };

  if (Loading) return <h2>Loading</h2>;
  if (serverError) {
    return <h2>{serverError || "Unkown Error"}</h2>;
  }

  if (traces === 3) {
    return <Navigate to={"/auth/thankyou"} replace={true}></Navigate>;
  }

  return (
    <Box className="main">
      <Box className="box1">
        <Typography className="question">{questions?.question}</Typography>
        <Typography className="select">
          Select all the changes you would like to see
        </Typography>
        <Box className="box3" key={questions?._id}>
          {questions?.length !== 0 &&
            questions?.options.map((q, i) => (
              <Box>
                <label htmlFor={`q${i}-options`} className="label1">
                  <Card
                    className={`${
                      i === 0
                        ? "option1"
                        : "" || i === 1
                        ? "option2"
                        : "" || i === 2
                        ? "option3"
                        : ""
                    }`}>
                    <Typography sx={{ fontSize: "1.2em" }} className="text3">
                      {q}
                    </Typography>
                    <input
                      type="checkbox"
                      id={`q${i}-options`}
                      className="a"
                      onChange={onselect}
                      name="options"
                      value={false}
                    />
                  </Card>
                </label>
              </Box>
            ))}
        </Box>
      </Box>
      {checked && <ArrowDownwardIcon className="icons" onClick={onNext} />}
    </Box>
  );
};

export default Question;
