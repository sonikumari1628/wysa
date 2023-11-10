import { createSlice } from "@reduxjs/toolkit";

export const questionReducer = createSlice({
  name: "questions",
  initialState: {
    loading: false,
    data: {},
    error: null,
    queue: [],
    trace: 0, //to move to next question
  },
  reducers: {
    startExamAction: (state, action) => {
      // let {question} = action.payload
      return {
        ...state,
        queue: action.payload,
      };
    },
    moveNextAction: (state) => {
      return {
        ...state,
        trace: state.trace + 1,
      };
    },
    getExamination(state, action) {
      const status = action.payload;
      if (status.type === "Loading-data") {
        state.loading = true;
      } else if (status.type === "Data-Success") {
        state.loading = false;
        state.data = status.payload;
      } else if (status.type === "Data-Fail") {
        state.loading = false;
        state.error = status.payload;
      }
    },
  },
});

export const { startExamAction, moveNextAction, getExamination } =
  questionReducer.actions;

export default questionReducer;
