import React, { useState } from 'react';

import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(expenses) {
    const [enteredFilter, setEnteredFilter] = useState("2020");
    function getFilterValue(filterValue) {
        setEnteredFilter(filterValue);
    }

    const filteredExpenses = expenses.expense.filter(expense =>
                    expense.date.getFullYear().toString() === enteredFilter
    );

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={enteredFilter}
                    onGetFilterValue={getFilterValue}
                />
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList expense={filteredExpenses}/>
            </Card>
        </div>
    );
}

export default Expenses;