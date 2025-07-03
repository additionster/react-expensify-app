import React from "react";
import { EditExpensePage } from "../../components/EditExpensePage";
import { fireEvent, screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter, useNavigate } from "react-router";
import configureStore from "../../store/configureStore";
import { Provider } from "react-redux";
import { expenses } from "../fixtures/expenses";
import moment from "moment";

let editExpenseSpy, removeExpenseSpy, store, renderer;

beforeEach(() => {
    editExpenseSpy = jest.fn();
    removeExpenseSpy = jest.fn();
    store = configureStore();
    renderer = render(
        <BrowserRouter>
            <Provider store={store}>
                <EditExpensePage 
                    expenses={expenses} 
                    editExpense={editExpenseSpy} 
                    removeExpense={removeExpenseSpy}
                    params={{id: expenses[0].id}}    
                />
            </Provider>
        </BrowserRouter>
    );
});

test('testRenderEditExpensePage', () => {
    expect(renderer.baseElement).toMatchSnapshot();
});

test('testRenderEditExpensePageOnSubmit', () => {
    const updatedDescription = expenses[0].description + ' edited';
    const updatedAmount = 300;
    const mockUseNavigate = jest.fn();
    jest.mock('react-router-dom', () => ({
        ...jest.requireActual('react-router-dom'),
        useNavigate: () => mockUseNavigate
    }));
    const submitButton = screen.getAllByRole('button').at(0);
    const descriptionInput = screen.getAllByRole('textbox').at(0);
    const amountInput = screen.getAllByRole('textbox').at(1);
    fireEvent.change(descriptionInput, {
        target: { value: updatedDescription }
    });
    fireEvent.change(amountInput, {
        target: { value: updatedAmount }
    });
    fireEvent.submit(submitButton);
    expect(editExpenseSpy).toHaveBeenCalledWith(
        expenses[0].id,
        {
            amount: updatedAmount * 100,
            createdAt: moment().valueOf(),
            description: updatedDescription,
            note: ""
        }
    );
});

test('testRenderEditExpensePageOnRemove',() => {
    const mockUseNavigate = jest.fn();
    jest.mock('react-router-dom', () => ({
        ...jest.requireActual('react-router-dom'),
        useNavigate: () => mockUseNavigate
    }));
    const removeButton = screen.getAllByRole('button').at(1);
    fireEvent.click(removeButton);
    expect(removeExpenseSpy).toHaveBeenCalledWith(expenses[0].id);
});