import React from 'react';
import {Route, Routes, BrowserRouter } from 'react-router';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import AuthListener from '../listeners/AuthListener';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';


const NewBrowserRouter = () => (
    <BrowserRouter>
        <AuthListener />
        <Routes>
            <Route element={<PublicRoute />}>
                <Route path="/" element={<LoginPage />}/>
            </Route>
            <Route element={<PrivateRoute />}>
                <Route path="/dashboard" element={<ExpenseDashboardPage />}/>
                <Route path="/create"  element={<AddExpensePage />}/>
                <Route path="/edit/:id"  element={<EditExpensePage />}/>
            </Route>
            <Route path="/help"  element={<HelpPage />}/>
            <Route path="/*"  element={<NotFoundPage />}/>
        </Routes>
    </BrowserRouter>
);

const   AppRouter = () => (
    <React.StrictMode>
     <NewBrowserRouter />
    </React.StrictMode>
 );

 export default AppRouter;