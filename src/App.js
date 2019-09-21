import React, {Fragment} from 'react';
import TodoForm from "./TodoForm.js";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


function App() {
  return(
    <Fragment>
      <Typography variant= 'h2' align='center' gutterBottom>
        Lista de cosas por hacer
      </Typography>
      <Grid container justify="center">
        <Grid item >
            <TodoForm/>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item md={8}>
          {/* <TodoList
            todos={this.state.todos}
            deleteTodo={this.deleteTodo}
            isItCheckedBox={this.isItCheckedBox}/>*/}
        </Grid>
      </Grid>
    </Fragment>
  )
}

export default App;
