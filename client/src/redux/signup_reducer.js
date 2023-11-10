import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  loading: false,
  data: {},
  error: null,
};
const SignupReducer = createSlice({
  name: "Signup",
  initialState,
  reducers: {
    userReducer(state, action) {
      const status = action.payload;
      if (status.type === "REGISTER_USER_REQUEST") {
        state.loading = true;
      } else if (status.type === "REGISTER_USER_SUCCESS") {
        state.loading = false;
        state.data = status.payload;
      } else if (status.type === "REGISTER_USER_FAIL") {
        state.loading = false;
        state.error = status.payload;
      }
    },
  },
});

export const userActions = SignupReducer.actions;

export default SignupReducer;
