import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

function ExpensesList(expenses) {
    if (expenses.expense.length === 0) return <h2 className="expenses-list__fallback">No expense found.</h2>;

    return (
        <ul className="expenses-list">
            {expenses.expense.map(expense => (
            <ExpenseItem
                key={expense.id}
                date={expense.date}
                title={expense.title}
                amount={expense.amount}
            />))}
        </ul>);
}

export default ExpensesList