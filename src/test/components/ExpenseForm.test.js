import React from "react";
import ExpenseForm from '../../components/ExpenseForm';
import { fireEvent, render } from "@testing-library/react";
import '@testing-library/jest-dom';
import { BrowserRouter } from "react-router";
import { expenses } from "../fixtures/expenses";
import { screen } from "@testing-library/react";

test('testRenderExpenseForm', () => {
    const renderer = render(<BrowserRouter><ExpenseForm /></BrowserRouter>);
    expect(renderer.baseElement).toMatchSnapshot();
});

test('testRenderExpenseFormWithExpenseData', () => {
    const renderer = render(<BrowserRouter><ExpenseForm expense={expenses[0]}/></BrowserRouter>);
    expect(renderer.baseElement).toMatchSnapshot();
});

test('testRenderErrorExpenseFormForInvalidFormSubmission', () => {
    const renderer = render(<BrowserRouter><ExpenseForm /></BrowserRouter>);
    expect(renderer.baseElement).toMatchSnapshot();
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(screen.getByText('Please provide description and amount.')).toBeInTheDocument();
    expect(renderer.baseElement).toMatchSnapshot();
});

test('testRenderExpenseFormForDescriptionChange', () => {
    const value = 'New description';
    const renderer = render(<BrowserRouter><ExpenseForm /></BrowserRouter>);
    const descriptionInput = screen.getAllByRole('textbox').at(0);
    fireEvent.change(descriptionInput, {
        target: { value }
    });
    expect(screen.getByPlaceholderText('Description').value).toBe(value);
});

test('testRenderExpenseFormForNoteChange', () => {
    const value = "New Note";
    render(<BrowserRouter><ExpenseForm /></BrowserRouter>);
    const noteInput = screen.getAllByRole('textbox').at(3);
    fireEvent.change(noteInput, {
        target: { value }
    });
    expect(noteInput.value).toBe(value);
});

test('testRenderExpenseFormForValidAmountChange', () => {
    const value = "23.50";
    render(<BrowserRouter><ExpenseForm /></BrowserRouter>);
    const amountInput = screen.getAllByRole('textbox').at(1);
    fireEvent.change(amountInput, {
        target: { value }
    });
    expect(amountInput.value).toBe(value);
});

test('testRenderExpenseFormForInvalidAmountChange', () => {
    const value = "12.122";
    render(<BrowserRouter><ExpenseForm /></BrowserRouter>);
    const amountInput = screen.getAllByRole('textbox').at(1);
    fireEvent.change(amountInput, {
        target: { value }
    });
    expect(amountInput.value).toBe("");
});

test('testRenderExpenseFormSubmission', () => {
    const onSubmitSpy = jest.fn();
    render(<BrowserRouter><ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/></BrowserRouter>);
    const submitButton = screen.getByRole('button');
    fireEvent.click(submitButton);
    expect(onSubmitSpy).toHaveBeenCalledWith({
        amount: expenses[0].amount, 
        createdAt: expenses[0].createdAt, 
        description: expenses[0].description, 
        note: expenses[0].note
    });
});

test('testRenderExpenseFormOnDateChange', () => {
    const value = "20/06/2025";
    render(<BrowserRouter><ExpenseForm /></BrowserRouter>);
    const dateInput = screen.getAllByRole('textbox').at(2);
    fireEvent.change(dateInput, {
        target: { value }
    });
    expect(dateInput.value).toBe(value);
});