import React from "react";
import { ExpensesSummary } from "../../components/ExpensesSummary";
import getExpensesTotal from '../../selectors/expenses-total';
import { expenses } from "../fixtures/expenses";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';

test('testExpensesSummaryWithSingleExpense', () => {
    const renderer = render(<ExpensesSummary expenseCount={1} expensesTotal={235}/>);
    expect(renderer.baseElement).toMatchSnapshot();
});

test('testExpensesSummaryWithMultipleExpenses', () => {
    const renderer = render(<ExpensesSummary expenseCount={expenses.length} expensesTotal={getExpensesTotal(expenses)}/>);
    expect(renderer.baseElement).toMatchSnapshot();
});


