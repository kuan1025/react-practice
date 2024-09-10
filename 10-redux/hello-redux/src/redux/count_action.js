import store from "./store"

export const createIncrementAction = (data) => { return {type : 'increment',data}}
// simplize
// sync action return object 
export const ceateDecrementAction = data => ({type : 'decrement',data})


