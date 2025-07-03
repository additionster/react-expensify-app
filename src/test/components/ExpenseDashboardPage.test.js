import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage';
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import configureStore from "../../store/configureStore";

test('shouldRenderExpenseDashboardPageCorrectly', () => {
    const store = configureStore();
    const renderer = render(
        <BrowserRouter>
            <Provider store={store}>
                <ExpenseDashboardPage />
            </Provider>
        </BrowserRouter>
    );
    expect(renderer.baseElement).toMatchSnapshot();
});