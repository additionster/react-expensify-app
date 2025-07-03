import React from "react";
import { connect } from "react-redux";
import ExpenseForm from './ExpenseForm';
import { addExpense } from "../actions/expenses";
import { Navigate } from "react-router";


export class AddExpensePage extends React.Component {
    state = {
        submitted: false
    }
    onSubmit = (expense) => {
        //Cannot use hook in arrow function. so replace with <Navigate to/>
        //const navigate = useNavigate();
        this.props.addExpense(expense);
        //navigate('/');
        this.setState({submitted: true});
    }

    render() {
        return (
            <div>
                {this.state.submitted && <Navigate to="/" />}
                <h1>Add Expense</h1>
                <ExpenseForm 
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    };
}

const mapDispatchToProps = (dispatch) => ({
    addExpense: (expense) => dispatch(addExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);