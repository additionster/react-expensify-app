
const getExpensesTotal = (expenses) => {
    let total = 0;
    if (expenses)
    {
        total = expenses.map((expense) => expense.amount).reduce((sum, value) => {
            return sum + value;
        }, 0);
        /*
        total = expenses.reduce((sum, currentValue) => {
            return {amount: sum.amount + currentValue.amount};
        });
        return total.amount;
        */
    }
    return total;
};

export default getExpensesTotal;