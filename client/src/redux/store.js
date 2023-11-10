import { configureStore, combineReducers } from "@reduxjs/toolkit";
import SignupReducer from "./signup_reducer";
import questionReducer from "./question_reducer";
//call reducer

// const rootReducer = combineReducers({
//     questions : questionReducer
// })
const store = configureStore({
  reducer: {
    user: SignupReducer.reducer,
    questions: questionReducer.reducer,
  },
});
//create store
//  export default configureStore({reducer: rootReducer})
export default store;
