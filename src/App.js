import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addCustomerAction } from "./store/actions/actions";
import { deleteCustomerAction } from "./store/actions/actions";
import { addCashAction } from "./store/actions/actions";
import { getCashAction } from "./store/actions/actions";
import { fetchCustomers } from "./store/asyncActions/customers";

const App = () => {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cashReducer.cash);
  const customers = useSelector((state) => state.customersReducer.customers);
  console.log(customers);

  const addCash = (cash) => {
    dispatch(addCashAction(cash));
  };

  const getCash = (cash) => {
    dispatch(getCashAction(cash));
  };

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now()
    };
    dispatch(addCustomerAction(customer));
  };

  const removeCustomer = (customer) => {
    dispatch(deleteCustomerAction(customer.id));
  };

  return (
    <div className="app">
      <div className="wrapper">
        <div className="cash">Cash: {cash}</div>
        <div className="buttons">
          <button onClick={() => addCash(Number(prompt()))} className="button">Add cash</button>
          <button onClick={() => getCash(Number(prompt()))} className="button">Get cash</button>
        </div>
        <div className="buttons">
          <button onClick={() => addCustomer(prompt())} className="buttonCustomer">Add customer</button>
          <button onClick={() => dispatch(fetchCustomers())} className="buttonCustomer">Take customers from DB</button>
        </div>
      </div>
      {customers.length > 0 
        ?
        <div className="customers">
          {customers.map(customer => 
            <div key={customer.id} onClick={() => removeCustomer(customer)} className="customer">{customer.name}</div>
          )}
        </div>
        :
        <div className="customersEmpty">
            List of clients is empty
        </div>
      }
    </div>
  );
};

export default App;
