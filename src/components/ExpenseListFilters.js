import React from "react";
import { connect } from "react-redux";
import { setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate } from "../actions/filters";
import DatePicker from "react-datepicker";

export class ExpenseListFilters extends React.Component {

    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    }

    onSortChange = (e) => {
        switch(e.target.value)
            {
                case 'date': this.props.sortByDate();break;
                case 'amount': this.props.sortByAmount();break;
            }
    }

    onDateChange = (dates) => {
        const [startDate, endDate] = dates;
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    }

    render() {
        return (
            <div>
                <input type="text" defaultValue={this.props.filters.text} onChange={this.onTextChange} />
                <select defaultValue={this.props.filters.sortBy} onChange={this.onSortChange}>
                    <option value='date'>Date</option>
                    <option value='amount'>Amount</option>
                </select>
                <DatePicker 
                    dateFormat='dd/MM/yyyy'
                    selectsRange={true}
                    startDate={this.props.filters.startDate?.toDate()}
                    endDate={this.props.filters.endDate?.toDate()}
                    onChange={this.onDateChange}
                    placeholderText="startDate - endDate"
                    isClearable={true}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (value) => dispatch(setTextFilter(value)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))

});
const ConnectedExpenseListFilters = connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);

export default ConnectedExpenseListFilters;