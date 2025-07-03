import moment from 'moment';

const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
};
const filterReducer = (state = filterReducerDefaultState, action) => {
    switch(action.type)
    {
        case 'SET_TEXT_FILTER':
            return {...state, text: action.text};
        case 'SORT_BY_AMOUNT':
        case 'SORT_BY_DATE':
            return {...state, sortBy: action.sortBy};
        case 'SET_START_DATE':
            const startDate = action.value? moment(action.value): action.value;
            return {...state, startDate };
        case 'SET_END_DATE':
            const endDate = action.value? moment(action.value): action.value;
            return {...state, endDate };
        default:
            return state;
    }
};

export default filterReducer;