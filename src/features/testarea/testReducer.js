import { createReducer } from '../../app/common/util/reducerUtil';
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./testConstants";

const initialState = {
    data: 433564
}

export const incrementCounter = (state, payload) => {
    return {...state, data: state.data + 1 };
}

export const decrementCounter = (state, payload) => {
    return {...state, data: state.data - 1 };
}

//Takes a state and action
// const testReducer = (state = initialState, action) => {
//     switch (action.type) { //ACTION IS BASED ON WHITCH TYPE OF ACTION IS COMING IN. CONDITION IS THE ACTION TYPE
//         case INCREMENT_COUNTER: // IN THE CASE OF INCREMENT COUNTER
//             return {...state, data: state.data +1 };
//             case DECREMENT_COUNTER:
//             return{...state, data: state.data -1 };
//             default:
//             return state;
//     }
// }

export default createReducer(initialState, {
    [INCREMENT_COUNTER]: incrementCounter,
    [DECREMENT_COUNTER]: decrementCounter
});