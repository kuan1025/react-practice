/**
 * 
 *  1. This file is to create a reducer for store management. The reducer is essentially a function
 *  2.  Reducer will receive two parameters, one for the previous state and one for the action
 * 
 */

const initState = 0;
// initState will be a default value if preState is undefined
export default function countReducer(preState = initState, action) {
    console.log('preState : '+ preState)
    console.log('action : '+ action)
    const { type, data } = action;
    switch (type) {
        case 'increment':
            return preState + data;
        case 'decrement':
            return preState - data;
        default:
            return preState;
    }

}