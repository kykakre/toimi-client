import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import formReducer from "./slice/FormSlice";
const rootReducer = combineReducers({
  formReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  });
};
