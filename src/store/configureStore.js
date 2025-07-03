import { configureStore, combineReducers } from "@reduxjs/toolkit";
import expenseReducer from "../reducers/expenses";
import filterReducer from "../reducers/filters";

export default () => {
    const store = configureStore({
        reducer: combineReducers({
            expenses: expenseReducer,
            filters: filterReducer
        }),
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            serializableCheck: false
        }),
        devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    });
    return store;
};
