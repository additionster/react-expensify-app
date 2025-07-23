import configureStore from '../../store/configureStore';
import  { addExpense, editExpense, removeExpense, setExpenses, startAddExpense, startRemoveExpense, startSetExpenses } from '../../actions/expenses';
import { expenses } from '../fixtures/expenses';
import { db, schema } from '../../firebase/firebase';
import { get, ref, set } from 'firebase/database';

const store = configureStore();

beforeEach((done) => {
    const expensesData = {};
    expenses.forEach(({ id, description, note, amount, createdAt }) => {
        expensesData[id] = { description, note, amount, createdAt };
    });
    set(ref(db, schema), expensesData).then(    () => done());
});

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

test('testSetExpenseWithData', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    });
});

test('testStartSetExpenses', (done) => {
    store.dispatch(startSetExpenses())
        .then(() => {
            const receivedExpense = store.getState().expenses;
            expect(receivedExpense).toEqual(expenses);
            done();
        });
});

test('testStartRemoveExpenses',(done) => {
    const id = expenses[0].id;
    store.dispatch(startRemoveExpense({ id }))
        .then(() => {
            const resultExpense = store.getState().expenses;
            expect(resultExpense).toEqual(expenses.filter((expense => expense.id != id)));
            done();
        });
});