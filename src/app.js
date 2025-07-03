import React from 'react';
import {createRoot} from 'react-dom/client';
import AppRouter from './routers/AppRouter';
//import './styles/styles.css';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { Provider } from 'react-redux';
import 'react-datepicker/dist/react-datepicker.css'

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', amount: 4500, createdAt: 1100 }));
store.dispatch(addExpense({ description: 'Gas bill', amount: 120, createdAt: 1200 }));
store.dispatch(addExpense({ description: 'Rent', amount: 109500, createdAt: 2000 }));
//store.dispatch(setTextFilter('water'));

console.log(store.getState());


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);
createRoot(document.getElementById('app')).render(jsx);
//Children inside component
//createRoot(document.getElementById('app')).render(<Layout>{template}</Layout>);

