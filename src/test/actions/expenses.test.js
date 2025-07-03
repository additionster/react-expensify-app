import { act } from 'react';
import  { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('testRemoveExpenseAction', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        expense: {id: '123abc'}
    });
});

test('testEditExpenseAction', () => {
    const updates = {
        note: 'New note value'
    };
    const action = editExpense('123abc', updates);
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates
    });
});

test('testAddExpenseActionWithProvidedValues', () => {
    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note: 'This was last month rent'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('testAddExpenseActionWithDefaultValues', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            note: '', 
            amount: 0, 
            createdAt: 0,
            id: expect.any(String) 
        }
    });
});