import React from "react";
import { Link } from "react-router";
import moment from "moment";
import numeral from "numeral";
const ExpenseListItem = ({id, description, amount, createdAt, dispatch}) => {
    return (
        <div>
            <h3>
                <Link to={`/edit/${id}`}>{description}</Link>
            </h3>
            <p>
                {numeral(amount / 100).format('$0,0.00')} 
                - 
                {moment(createdAt).format('MMMM Do, YYYY')}
            </p>
        </div>
    )
};

export default ExpenseListItem;