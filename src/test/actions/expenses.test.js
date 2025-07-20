import configureStore from '../../store/configureStore';
import  { addExpense, editExpense, removeExpense, startAddExpense } from '../../actions/expenses';
import { expenses } from '../fixtures/expenses';
import { db, schema } from '../../firebase/firebase';
import { get, ref } from 'firebase/database';

const store = configureStore();

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
        expense: expenseData
    });
});

test('testAddExpenseActionWithDefaultValues', () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    });
});

//use done for async function calls in jest tests
test('testAddExpenseToDatabase', (done) => {
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: 'This one is better',
        createdAt: 1000
    };
    store.dispatch(startAddExpense(expenseData))
        .then(() => {
            const receivedExpense = store.getState().expenses.at(0);
            expect(receivedExpense).toEqual({
                id: expect.any(String),
                ...expenseData
            });
            return get(ref(db, `${schema}/${receivedExpense.id}`));
        }).then((snapshot) => {
            expect(snapshot.val()).toEqual(expenseData);
            done();
        });
});

test('testAddExpenseToDatabaseWithDefaultValues', (done) => {
    const defaultExpenseValues = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    };
    store.dispatch(startAddExpense([]))
        .then(() => {
            const receivedExpense = store.getState().expenses.at(1);
            expect(receivedExpense).toEqual({
                id: expect.any(String),
                ...defaultExpenseValues
            });
            return get(ref(db, `${schema}/${receivedExpense.id}`));
        }).then((snapshot) => {
            expect(snapshot.val()).toEqual(defaultExpenseValues);
            done();
        });
});