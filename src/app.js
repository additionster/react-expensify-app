import React from 'react';
import {createRoot} from 'react-dom/client';
import AppRouter from './routers/AppRouter';
//import './styles/styles.css';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { Provider } from 'react-redux';
import 'react-datepicker/dist/react-datepicker.css'
import './firebase/firebase';
//import './playground/promises';

const store = configureStore();

console.log(store.getState());


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);
const root = createRoot(document.getElementById('app'));
root.render(<p>Loading...</p>);
store.dispatch(startSetExpenses()).then(() => {
    root.render(jsx);
});
//Children inside component
//createRoot(document.getElementById('app')).render(<Layout>{template}</Layout>);

