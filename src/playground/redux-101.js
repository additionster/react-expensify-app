import { configureStore } from '@reduxjs/toolkit';
import CountReducer from './CountReducer';

//destructuring object in method parameters

const add = ({a = 1, b = 1}) => {
    return a + b;
};

const data = {
    a: 1,
    b: 12
};
console.log(add(data));

//Action generators using obj destructuring in method parameters
const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const set = ({count = 1} = {}) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

//Reducers
//1. Reducers are pure functions
//2. Never change state or action

const store = configureStore({
    reducer: CountReducer
});

{
    type: 'INCREMENT'
}

const unsubscribe = store.subscribe(() => {
    console.log(store. getState());
});

store.dispatch(incrementCount({incrementBy: 5}));
store.dispatch(decrementCount({decrementBy: 3}));
//calling another subscribe will unsubscribe
//unsubscribe();
store.dispatch(incrementCount());
store.dispatch(decrementCount());
store.dispatch(resetCount());

store.dispatch(set({count: 101}));