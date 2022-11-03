import { applyMiddleware, combineReducers, configureStore } from "@reduxjs/toolkit";
import { cashReducer } from "./reducers/cashReducer";
import { customersReducer } from "./reducers/customersReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const composeWithDevTool = composeWithDevTools(applyMiddleware(thunk));

const reducer = combineReducers({
  cashReducer,
  customersReducer
});

export const store = configureStore({
  reducer,
  composeWithDevTool
});