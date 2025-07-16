import getExpensesTotal from "../../selectors/expenses-total";
import { expenses } from "../fixtures/expenses";

test('testGetExpensesTotalWithValues', () => {
    const result = getExpensesTotal(expenses);
    expect(result).toEqual(114195);
});

test('testGetExpensesTotalWithoutValues', () => {
    const result = getExpensesTotal();
    expect(result).toEqual(0);
});

test('testGetExpensesTotalWithSingleValue', () => {
    const result = getExpensesTotal([expenses[0]]);
    expect(result).toEqual(195);
});