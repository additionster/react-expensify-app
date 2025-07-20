import React from "react";
import { AddExpensePage } from "../../components/AddExpensePage";
import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { BrowserRouter } from "react-router";
import configureStore from "../../store/configureStore";
import { Provider } from "react-redux";
import { expenses } from "../fixtures/expenses";
import moment from "moment";

let addExpenseSpy, store, renderer;

beforeEach(() => {
    addExpenseSpy = jest.fn();
    store = configureStore();
    renderer = render(
        <BrowserRouter>
            <Provider store={store}>
                <AddExpensePage startAddExpense={addExpenseSpy} />
            </Provider>
        </BrowserRouter>
    );
});

test('testRenderAddExpensePage', () => {
    expect(renderer.baseElement).toMatchSnapshot();
});

test('testRenderAddExpensePageOnSubmit', () => {
    const mockUseNavigate = jest.fn();
    //mock useNavigate for <Navigate />
    jest.mock('react-router-dom', () => ({
        ...jest.requireActual('react-router-dom'),
        useNavigate: () => mockUseNavigate
    }));
    const submitButton = screen.getByRole('button');
    const descriptionInput = screen.getAllByRole('textbox').at(0);
    const amountInput = screen.getAllByRole('textbox').at(1);
    fireEvent.change(descriptionInput, {
        target: { value: expenses[1].description }
    });
    fireEvent.change(amountInput, {
        target: { value: expenses[1].amount }
    });
    fireEvent.submit(submitButton);
    expect(addExpenseSpy).toHaveBeenCalledWith({
        amount: expenses[1].amount * 100, 
        createdAt: moment().valueOf(), 
        description: expenses[1].description, 
        note: ""
    });
});