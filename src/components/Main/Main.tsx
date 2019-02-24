import React, {useEffect, useState} from 'react'
import {Grid, TextField, Paper, } from "@material-ui/core";
import {WithStyles, withStyles, createStyles, Theme} from "@material-ui/core";
import useTodos from '../../Hooks/todoHook'

import TodoForm from '../TodoForm/TodoForm'
import TodosList from '../TodosList/TodosList'
import Todo from "../../models/Todo";


const styles = (theme: Theme) => (
    createStyles({
        root: {
            width: 520,
            height: '100%',
        },
        textField: {
            width: '100%',
            marginTop: theme.spacing.unit,
            marginBottom: theme.spacing.unit

        }
    })
);

interface Props extends WithStyles<typeof styles> {

}

const Main = (props: Props): JSX.Element => {

    const {classes} = props;

    const { todos, setTodos, addTodo, deleteTodo, toggleCompleted } = useTodos();

    useEffect(() => {
        let savedTodosString = localStorage.getItem('todos');
        if (savedTodosString !== null) {
            let savedTodos = JSON.parse(savedTodosString);
            setTodos(savedTodos)
        }
    }, []);

    return (
        <Grid container direction='column' justify='center' alignItems='center' alignContent='center'>
            <Grid item className={classes.root} container alignContent='stretch' alignItems='stretch' justify='center' direction='column'>
                <Grid item className={classes.textField}>
                    <TodoForm addTodo={addTodo}/>
                </Grid>
                <Paper elevation={1}>
                    <Grid item>
                        <TodosList todos={todos} deleteTodo={deleteTodo} toggleCompleted={toggleCompleted}/>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    )
};

export default withStyles(styles)(Main)