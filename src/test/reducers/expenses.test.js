import expenseReducer from '../../reducers/expenses';
import { expenses } from '../fixtures/expenses';

test('testExpenseReducerWithDefaultValue', () => {
    const state = expenseReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('testExpenseReducerRemovalByValidId', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        expense: {
            id: expenses[1].id
        }
    };
    const state = expenseReducer(expenses, action);
    expect(state).toEqual([ expenses[0], expenses[2]]);
});

test('testExpenseReducerRemovalByInvalidId', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        expense: {
            id: '-1'
        }
    };
    const state = expenseReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('testExpenseReducerAddExpense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: expenses[0]
    };
    const state = expenseReducer(undefined, action);
    expect(state).toEqual([expenses[0]]);
});

test('testExpenseReducerEditExpenseWithValidId', () => {
    const amount = 119500;
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            amount
        }
    };
    const state = expenseReducer(expenses, action);
    expect(state[1].amount).toBe(amount);
});

test('testExpenseReducerEditExpenseWithInvalidId', () => {
    const updatedExpense = {
        id: '-1',
        description: 'Edited Rent',
        note: 'Update amount',
        amount: 119500,
        createdAt: expenses[1].createdAt
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: updatedExpense
    };
    const state = expenseReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('testExpenseReducerSetExpensesWithData', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses
    };
    const state = expenseReducer(undefined, action);
    expect(state).toEqual(expenses);
});