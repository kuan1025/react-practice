import { INCREMENT, DECREMENT } from "../constant";

export const createIncrementAction = (data) => { return {type : INCREMENT,data}}
// simplize
// sync action return object 
export const ceateDecrementAction = data => ({type : DECREMENT,data})


