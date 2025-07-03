import { addExpense, editExpense, removeExpense } from "../actions/expenses";
import { setTextFilter, sortByAmount } from "../actions/filters";
import getVisibleExpenses from "../selectors/expenses";
import store from "../store/configureStore";


store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: 1000}));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000}));
const expenseThree = store.dispatch(addExpense({ description: 'Rent 3', amount: 300}));

//store.dispatch(removeExpense({id: expenseOne.expense.id}));
store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

//store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

//store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());

//store.dispatch(setEndDate(999));
// store.dispatch(setEndDate());

const demoState = {
    expenses: [{
        id: 'random',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};