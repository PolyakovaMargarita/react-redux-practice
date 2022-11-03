import { ADD_CASH } from "../const";
import { GET_CASH } from "../const";

const initialState = {
  cash: 5
};

export const cashReducer = (state = initialState, action) => {
  switch (action.type) {
  case ADD_CASH:
    return {...state, cash: state.cash + action.payload};
  case GET_CASH:
    return {...state, cash: state.cash - action.payload};
  default:
    return state;
  }
};