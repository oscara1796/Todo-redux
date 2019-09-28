import React from 'react';
import TextField from '@material-ui/core/TextField';
import * as actions from "./redux/actions";
import {connect} from "react-redux";



const TodoForm= ({value, updateValue, saveTodo}) =>{
  return(
    <form
      onSubmit={e =>{
        e.preventDefault();
        saveTodo()
      }}>
      <TextField
        label="To do"
         type="text"
          placeholder="Next to do...."
          value={value}
          onChange = {e => updateValue(e.target.value)}

          />

    </form>
  );
}

const mapStateToProps = ({todoReducer}) =>{
  const {value} = todoReducer;
  return {value}
}

export default connect(
  mapStateToProps,
  actions
)(TodoForm);
