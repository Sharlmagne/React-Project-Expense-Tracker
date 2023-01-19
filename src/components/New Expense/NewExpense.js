import {useState} from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";


function NewExpense(prop) {
    const [showForm, setShowForm] = useState(false);

    function saveExpenseDataHandler(enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        prop.onAddExpense(expenseData); // Send new expense data to the app component
        setShowForm(false);
    }

    function loadFormHandler(){
        if (showForm) setShowForm(false)
        else setShowForm(true);
    }

    if (!showForm) {
        return(
            <div className="new-expense">
                <button onClick={loadFormHandler}>Add New Expense</button>
            </div>
        );
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={loadFormHandler}/>
        </div>
    );
}

export default NewExpense;