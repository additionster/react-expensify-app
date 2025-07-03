export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
    sortBy: 'amount'
});

export const sortByDate = () => ({
    type: 'SORT_BY_DATE',
    sortBy: 'date'
});

export const setStartDate = (value = undefined) => ({
    type: 'SET_START_DATE',
    value
});

export const setEndDate = (value = undefined) => ({
    type: 'SET_END_DATE',
    value
});