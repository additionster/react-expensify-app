
const CountReducer = (state = {count:0}, action) => {
    console.log(action);
    switch(action.type)
    {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT': 
            const decrementBy = typeof action.decrementBy === 'number'? action.decrementBy : 1;
            return (state.count - decrementBy <= 0)? state:
            {
                count: state.count - decrementBy
            }
        case 'RESET':
            return {
                count: 0
            }
        case 'SET':
            return {
                count: action.count
            };
        default:
            return state;
    }
};

export default CountReducer;