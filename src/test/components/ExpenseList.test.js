import React from "react";
import { ExpenseList } from "../../components/ExpenseList";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { expenses } from '../fixtures/expenses';
import { BrowserRouter } from "react-router";

test('testRenderExpenseList', () => {
    const renderer = render(<BrowserRouter><ExpenseList expenses={expenses}/></BrowserRouter>);
    expect(renderer.baseElement).toMatchSnapshot();
});

test('testRenderExpenseListWithEmptyList', () => {
    const renderer = render(<BrowserRouter><ExpenseList /></BrowserRouter>);
    expect(renderer.baseElement).toMatchSnapshot();
});