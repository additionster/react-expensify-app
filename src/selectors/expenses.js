import moment from "moment";

const selectExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch = endDate? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
        const textMatch = typeof text !== 'string' || expense.description?.toLowerCase().indexOf(text.toLowerCase()) !== -1;
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy == 'date')
        {
            //return -1 => sort by a first. return 1 => sort by b first.
            return a.createdAt < b.createdAt ? 1:-1;
        }
        else if (sortBy == 'amount')
        {
            return a.amount < b.amount ? 1:-1;
        }
    });
};

export default selectExpenses;