import { useState } from "react";
import "./expenseform.css";

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = (event) => {
    setUserInput((prevstate) => {
      return { ...prevstate, enteredTitle: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    setUserInput((prevstate) => {
      return { ...prevstate, enteredAmount: event.target.value };
    });
  };

  const dateChangeHandler = (event) => {
    setUserInput((prevstate) => {
      return { ...prevstate, enteredDate: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onSaveExpenseData(userInput);
    setUserInput({
        enteredTitle: "",
        enteredAmount: "",
        enteredDate: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control"></div>
        <label>Title</label>
        <input
          type="text"
          value={userInput.enteredTitle}
          onChange={titleChangeHandler}
        ></input>
        <div className="new-expense__controls"></div>
        <div className="new-expense__control"></div>
        <label>Amount</label>
        <input
          type="number"
          min="0.01"
          step="1.0"
          value={userInput.enteredAmount}
          onChange={amountChangeHandler}
        ></input>
        <div className="new-expense__controls"></div>
        <div className="new-expense__control"></div>
        <label>Date</label>
        <input
          type="date"
          min="2019-01-01"
          max="2022-12-31"
          value={userInput.enteredDate}
          onChange={dateChangeHandler}
        ></input>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
