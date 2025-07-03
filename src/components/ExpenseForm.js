import React from 'react';
import moment from 'moment';
import DatePicker from 'react-datepicker';


class ExpenseForm extends React.Component {
    state = {
        description: this.props.expense? this.props.expense.description: '',
        amount: this.props.expense? (this.props.expense.amount/100).toString():'',
        note: this.props.expense? this.props.expense.note:'',
        createdAt: this.props.expense? moment(this.props.expense.createdAt):moment(),
        error: ''
    };
    onDescriptionChange = (e) => {
        const desc = e.target.value;
        this.setState(() => ({description:desc}));
    };
    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    };
    onCreatedAt = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }   
    };
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({note}));
    };
    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: 'Please provide description and amount.'}));
        }
        else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    };
    render() {
        return (
            <div>
                {this.state.error && <p style={{color:"red"}}>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input 
                        type="text"
                        placeholder='Description'
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input 
                        type="text"
                        placeholder='Amount'
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <DatePicker 
                        showIcon
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode='select'
                        selected={this.state.createdAt}
                        minDate={moment().subtract(10,'days').calendar()}
                        dateFormat="dd/MM/yyyy"
                        placeholderText='dd/MM/yyyy'
                        onChange={this.onCreatedAt}
                    />
                    <textarea 
                        value={this.state.note}
                        placeholder='Add a note for your expense  (optional)'
                        onChange={this.onNoteChange}
                    >
                    </textarea>
                    <button>{this.state.description? "Edit":"Add"} Expense</button>
                </form>
            </div>
        );
    }
}

export default ExpenseForm;