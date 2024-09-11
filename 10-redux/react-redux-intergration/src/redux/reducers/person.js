import { ADD_PERSON } from "../constant";

const initState = [{id:'001', name : 'Quan', age : 25}]
export default function personReducer(preState = initState ,action){
    const { type, data } = action;
    console.log("!!! -> ",data)
    switch (type) {
        case ADD_PERSON:
            return [data,...preState];
        default:
            return preState;
    }
}