import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { BrowserRouter } from "react-router";
import configureStore from "../../store/configureStore";
import { Provider } from "react-redux";
import moment from "moment";
import { ExpenseListFilters } from "../../components/ExpenseListFilters";
import {filters, altFilters} from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, store, renderer;

beforeEach(()  => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate =jest.fn();
    store = configureStore();
    renderer = render(
        <ExpenseListFilters 
            filters={filters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />
    );
});

test('testRenderExpenseListFilters', () => {
    expect(renderer.baseElement).toMatchSnapshot();
});

test('testRenderExpenseListFiltersWithAltFilters', () => {
    const { rerender } = renderer;
    //re-render the component 
    rerender(<ExpenseListFilters filters={altFilters}/>);
    expect(renderer.baseElement).toMatchSnapshot();
});

test('testRenderExpenseListFiltersHandleTextChage', () => {
    const updatedText = 'Rent';
    const textInput = screen.getAllByRole('textbox').at(0);
    fireEvent.change(textInput, {
        target: { value: updatedText}
    });
    expect(setTextFilter).toHaveBeenCalledWith(updatedText);
});

test('testRenderExpenseListFiltersSortByDate', () => {
    const { rerender } = renderer;
    //re-render the component 
    rerender(<ExpenseListFilters filters={altFilters} sortByDate={sortByDate}/>);
    const selectInput = screen.getByRole('combobox');
    fireEvent.change(selectInput, {
        target: { value: 'date'}
    });
    expect(sortByDate).toHaveBeenCalled();
});

test('testRenderExpenseListFiltersSortByAmount', () => {
    const selectInput = screen.getByRole('combobox');
    fireEvent.change(selectInput, {
        target: { value: 'amount' }
    });
    expect(sortByAmount).toHaveBeenCalled();
});

test('testRenderExpenselistFiltersHandleDateChange', () => {
    const dateInput = screen.getAllByRole('textbox').at(1);
    fireEvent.change(dateInput, {
        target: { value: '01/01/2020 - 01/02/2020' }
    });
    expect(setStartDate).toHaveBeenLastCalledWith(moment('2020-01-01').toDate());
    expect(setEndDate).toHaveBeenLastCalledWith(moment('2020-02-01').toDate());
});