import React, { Component } from "react";
import { connect } from "react-redux";
import ExpenseForm from './ExpenseForm';
import { Navigate, useParams } from "react-router";
import { startEditExpense, startRemoveExpense } from "../actions/expenses";

//wrap hook (useParams) inside function based component
function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}

export class EditExpensePage extends React.Component {
    state = {
        submitted: false
    }

    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.params.id, expense);
        this.setState({submitted: true});
    }

    onRemove = () => {
        this.props.startRemoveExpense(this.props.params.id);
        this.setState({submitted: true});
    }

    render() {
        return (
            <div>
                {this.state.submitted && <Navigate to="/" />}
                <h1>Edit Expense</h1>
                <ExpenseForm 
                    expense={this.props.expenses.find((expense) => expense.id === this.props.params.id)}
                    onSubmit={this.onSubmit}
                />
                <button onClick={this.onRemove}>
                    Remove
                </button>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
    };
};

const mapDispatchToProps = (dispatch) => ({
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: (id) => dispatch(startRemoveExpense({id}))
})

const connectedEditExpense = connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);

export default withParams(connectedEditExpense);