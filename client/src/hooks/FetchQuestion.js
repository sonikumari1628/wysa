//fetch api data

import { useEffect, useState } from "react";
// import data from "../components/data/data.js"
import { useDispatch } from "react-redux";
import * as Action from "../redux/question_reducer.js";

import { userActions } from "../redux/signup_reducer.js";
import axios from "axios";
import getExamination from "../redux/question_reducer.js";

export const useFetchQuestion = () => {
  const dispatch = useDispatch();
  const [getData, setGetData] = useState({
    Loading: false,
    apiData: [],
    serverError: null,
  });

  // console.log(data)

  useEffect(() => {
    setGetData((prev) => ({ ...prev, Loading: true }));

    (async () => {
      try {
        // let question = await data.data
        const response = await axios.get("http://localhost:8800/api/quest/");
        const question = response.data.data;
        console.log(question);

        if (question.length > 0) {
          setGetData((prev) => ({
            ...prev,
            Loading: false,
            serverError: null,
          }));
          setGetData((prev) => ({ ...prev, apiData: question }));

          dispatch(Action.startExamAction(question));
        } else {
          setGetData((prev) => ({
            ...prev,
            Loading: false,
            serverError: "No question available",
          }));
          // throw new Error("No Question Available");
        }
      } catch (error) {
        setGetData((prev) => ({ ...prev, Loading: false }));
        setGetData((prev) => ({ ...prev, serverError: error }));
      }
    })(); //ayonomous function
  }, [dispatch]);

  return [getData, setGetData];
};

//moveAction dispatch
export const MoveNextQuestion = () => async (dispatch) => {
  try {
    dispatch(Action.moveNextAction());
  } catch (error) {
    console.log(error);
  }
};

// signup action

export const signup = (userData) => {
  return async (dispatch) => {
    try {
      dispatch(userActions.userReducer({ type: "REGISTER_USER_REQUEST" }));

      const config = { headers: { "Content-Type": "application/json" } };

      const { data } = await axios.post(
        "http://localhost:8800/api/auth/signup",
        userData,
        config
      );

      if (data.status === true) {
        localStorage.setItem("user", JSON.stringify({ token: data.token }));
        console.log(data);
        dispatch(
          userActions.userReducer({
            type: "REGISTER_USER_SUCCESS",
            payload: data.data,
          })
        );
      }
    } catch (error) {
      dispatch(
        userActions.userReducer({
          type: "REGISTER_USER_FAIL",
          payload: error,
        })
      );
    }
  };
};
