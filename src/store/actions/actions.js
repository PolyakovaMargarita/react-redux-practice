import { ADD_CUSTOMER } from "../const";
import { DELETE_CUSTOMER } from "../const";
import { ADD_CASH } from "../const";
import { GET_CASH } from "../const";
import { ADD_MANY_CUSTOMERS } from "../const";

export const addCustomerAction = (payload) => ({type: ADD_CUSTOMER, payload});
export const deleteCustomerAction = (payload) => ({type: DELETE_CUSTOMER, payload});
export const addCashAction = (payload) => ({type: ADD_CASH, payload});
export const getCashAction = (payload) => ({type: GET_CASH, payload});
export const addManyCustomersAction = (payload) => ({type: ADD_MANY_CUSTOMERS, payload});