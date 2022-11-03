import { ADD_CUSTOMER } from "../const";
import { DELETE_CUSTOMER } from "../const";
import { ADD_MANY_CUSTOMERS } from "../const";

const initialState = {
  customers: []
};

export const customersReducer = (state = initialState, action) => {
  switch (action.type) {
  case ADD_MANY_CUSTOMERS:
    return {...state, customers: [
      ...state.customers, ...action.payload
    ]};
  case ADD_CUSTOMER:
    return {...state, customers: [
      ...state.customers, action.payload
    ]};
  case DELETE_CUSTOMER:
    return {...state, customers: state.customers.filter((customer) => customer.id !== action.payload)};
  default:
    return state;
  }
};

