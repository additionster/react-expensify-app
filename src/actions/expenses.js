import {v7 as uuid} from 'uuid';
import { db, schema } from '../firebase/firebase';
import { ref, push, get, remove, update } from 'firebase/database';

//ADD expense
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData;
        const expense = { description, note, amount, createdAt };
        return push(ref(db, schema), expense)
            .then((ref) => {
                dispatch(addExpense({
                    id: ref.key,
                    ...expense
                }));
            });
    };
};

export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

export const startEditExpense = (id, updates) => {
    return (dispatch) => {
        return update(ref(db, `${schema}/${id}`), {
            ...updates
        }).then(() => {
            dispatch(editExpense(id, updates));
        });
    };
};

export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    expense: {
        id
    }
});

export const startRemoveExpense = ({ id }) => {
    return (dispatch) => {
        return remove(ref(db, `${schema}/${id}`))
            .then(() => {
                dispatch(removeExpense({ id }));
            });
    };
};

//SET_EXPENSE
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});

export const startSetExpenses = () => {
    return (dispatch) => {
        const expenses = [];
        return get(ref(db, schema))
            .then((snapshot) => {
                snapshot.forEach(childSnapshot => {
                    expenses.push({
                        id: childSnapshot.key,
                        ...childSnapshot.val()
                    });
                });
                dispatch(setExpenses(expenses));
            });
    };
};