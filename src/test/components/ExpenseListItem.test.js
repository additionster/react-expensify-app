import React from "react";
import ExpenseListItem from "../../components/ExpenseListItem";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import { expenses } from "../fixtures/expenses";
import { BrowserRouter } from "react-router";

test('testRenderExpenseListItem', () => {
    const renderer = render(<BrowserRouter><ExpenseListItem {...expenses[0]} /></BrowserRouter>);
    expect(renderer.baseElement).toMatchSnapshot();
});