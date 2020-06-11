import React from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import TransactionList from "./components/TransactionList";
import IncomeExpenses from "./components/IncomeExpenses";
import { AddTransaction } from "./components/AddTransaction";

import { Provider } from "./context/GlobalState";

import "./App.css";

function App() {
  return (
    <Provider>
      <Header title="Expense Tracker" />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </Provider>
  );
}

export default App;
