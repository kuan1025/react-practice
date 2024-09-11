import { ADD_PERSON } from "../constant";

export const createAddPerson = (personObj) =>{
   return ({type:ADD_PERSON,data:personObj});
} 