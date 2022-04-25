import { useState } from "react";
import Card from "../ui/Card";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseItem.css";
import "./Expenses.css";
import "./ExpensesFilter";
import ExpensesFilter from "./ExpensesFilter";


const Expenses = (props) => {

  const [setYear,setYearInput] = useState('2020');

  const onSelectedYearHandler = (selectedYear) => {
    console.log(selectedYear);
    setYearInput(selectedYear)
  };

  return (
    <div>
      <Card className="expenses">
      <ExpensesFilter selected={setYear} onSelectedYear={onSelectedYearHandler} />
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        />
      </Card>
    </div>
  );
};

export default Expenses;
