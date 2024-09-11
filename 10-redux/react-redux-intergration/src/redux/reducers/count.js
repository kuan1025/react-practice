/**
 * 
 *  1. This file is to create a reducer for store management. The reducer is essentially a function
 *  2.  Reducer will receive two parameters, one for the previous state and one for the action
 * 
 */
import { INCREMENT, DECREMENT } from "../constant";
const initState = 0;
// initState will be a default value if preState is undefined
export default function countReducer(preState = initState, action) {
    console.log('preState : '+ preState)
    console.log('action : '+ action)
    const { type, data } = action;
    switch (type) {
        case INCREMENT:
            return preState + data;
        case DECREMENT:
            return preState - data;
        default:
            return preState;
    }

}