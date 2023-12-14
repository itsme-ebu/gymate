import { configureStore, combineReducers } from "@reduxjs/toolkit";
import trainerReducer from "../slices/trainerSlice";
import scheduleSlice from "../slices/scheduleSlice";
import blogSlice from "../slices/blogSlice";
import classSlice from "../slices/classSlice";
const rootReducer = combineReducers({
  trainers: trainerReducer,
  schedule: scheduleSlice,
  blog: blogSlice,
  class: classSlice,
});
const store = configureStore({
  reducer: rootReducer,
});

export default store;
