import React from 'react';
import {Route, Routes, BrowserRouter } from 'react-router';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';


const NewBrowserRouter = () => (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<ExpenseDashboardPage />}/>
            <Route path="/create"  element={<AddExpensePage />}/>
            <Route path="/edit/:id"  element={<EditExpensePage />}/>
            <Route path="/help"  element={<HelpPage />}/>
            <Route path="/*"  element={<NotFoundPage />}/>
        </Routes>
    </BrowserRouter>
);

const AppRouter = () => (
    <React.StrictMode>
     <NewBrowserRouter />
    </React.StrictMode>
 );

 export default AppRouter;