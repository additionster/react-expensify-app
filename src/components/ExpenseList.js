import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";

export const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {
            props.expenses && props.expenses.length !== 0? (
                props.expenses.map((expense) => {
                    return <ExpenseListItem key={expense.id} {...expense}/>
                })
            ) : (
                <p>No expenses</p>
            )
        }
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};
//Connect store from redux using HOC pattern
const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList);

export default ConnectedExpenseList;