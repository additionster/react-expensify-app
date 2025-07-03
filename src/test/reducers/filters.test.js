import { experiments } from 'webpack';
import filterReducer from '../../reducers/filters';
import moment from 'moment';

test('testFilterReducerWithDefaultValue', () => {
    const state = filterReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('testFilterReducerWithSortByAmount', () => {
    const state = filterReducer(undefined, { type: 'SORT_BY_AMOUNT', sortBy: 'amount' });
    expect(state.sortBy).toBe('amount');
});

test('testFilterReducerWithSortByDate', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    };
    const action = { type: 'SORT_BY_DATE', sortBy: 'date' };
    const state = filterReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('testFilterReducerWithSetTextFilter', () => {
    const state = filterReducer(undefined, { type: 'SET_TEXT_FILTER', text: 'test'});
    expect(state.text).toBe('test');
});

test('testFilterReducerWithStartDateFilter', () => {
    const state = filterReducer(undefined, { type: 'SET_START_DATE', value: 1000 });
    expect(state.startDate.toString()).toBe(moment(1000).toString());
});

test('testFilterReducerWithEndDateFilter', () => {
    const state = filterReducer(undefined, { type: 'SET_END_DATE', value: moment().add(4, 'days').valueOf() });
    expect(state.endDate.toString()).toBe(moment().add(4, 'days').toString());
});