import {UPDATE_VALUE} from "./actionTypes";
import {SAVE_TODO} from "./actionTypes";
import {DELETE_TODO} from "./actionTypes";
import {ISITCHECKED} from "./actionTypes";

export const updateValue = (value) =>{
  return {
    type: UPDATE_VALUE,
    payload: value
  }
}

export const saveTodo = () =>{
  return {
    type: SAVE_TODO,
    payload: null
  }
}


export const deleteTodo = (index) =>{
  return {
    type: DELETE_TODO,
    payload: index
  }
}

export const isItCheckedBox= (index ) =>{
  return{
    type: ISITCHECKED,
    payload: index
  }
}
