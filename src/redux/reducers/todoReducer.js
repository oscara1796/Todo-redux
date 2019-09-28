import {UPDATE_VALUE, SAVE_TODO,DELETE_TODO, ISITCHECKED} from "../actions/actionTypes"


const INITIAL_STATE = {
  value: "",
  todos: []
}


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case UPDATE_VALUE:
          return{
            ...state,
            value: action.payload
          }

      case SAVE_TODO:
      console.log(state)
        return state.value
        ? {
          ...state,
          todos:[...state.todos,
            {
              value: state.value,
              completed: false
            }
          ],
          value: "",
        }
        : state;
        case DELETE_TODO:
        return{
          ...state,
          todos: state.todos.filter((_,i)=> action.payload !== i)
        }
        case ISITCHECKED:
        return{
          ...state,
          todos: state.todos.map((todo,i) =>{ return(action.payload === i ? {...todo, completed: !todo.completed  } : todo)
        }),
        }

      default:
        return state;

    }
}
