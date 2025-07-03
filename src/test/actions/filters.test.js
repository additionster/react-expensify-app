import {setTextFilter, setStartDate, setEndDate, sortByDate, sortByAmount } from '../../actions/filters';
import moment from 'moment';

test('testSetStartDate', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        value: moment(0)
    });
});

test('testEndDate', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        value: moment(0)
    });
});

test('testSortByAmount', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT',
        sortBy: 'amount'
    });
});

test('testSoryByDate',  () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE',
        sortBy: 'date'
    });
});

test('testSetTextFilterWithValue', () => {
    const text = 'test';
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    });
});

test('testSetTextFilterWithDefaultValue', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});