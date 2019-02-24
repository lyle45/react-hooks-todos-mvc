import React, {useState} from 'react'
import {Button, FormControlLabel, Grid, List, ListItem, Radio, Typography} from "@material-ui/core";

import Todo from '../../models/Todo'

import TodoItem from '../TodoItem/TodoItem'


interface Props {
    todos: Todo[],
    toggleCompleted: Function,
    deleteTodo: Function
}

const TodosList = (props: Props): JSX.Element => {
    const {todos, toggleCompleted, deleteTodo} = props;

    const [filter, setFilter] = useState('all');

    const listItems = todos.map((todo, i) => {
        const item =
            <TodoItem todo={todo} index={i} key={i} toggleCompleted={toggleCompleted} deleteTodo={deleteTodo}/>;
        if (filter === 'all') return item;
        else if (filter === 'active' && !todo.completed) return item;
        else if (filter === 'completed' && todo.completed) return item;
        return null
    });

    const list = (
        <>
            {listItems}
            <ListItem>
                <Typography color='textSecondary' >
                    Items:{todos.length}
                </Typography>
                <Grid container justify='center' alignContent='center' alignItems='flex-start'>
                    <Grid item>
                        <FormControlLabel onClick={() => {setFilter('all')}} control={<Radio checked={filter === 'all'}/>} label="All"/>
                        <FormControlLabel onClick={() => {setFilter('active')}} control={<Radio checked={filter === 'active'}/>} label='Active'/>
                        <FormControlLabel onClick={() => {setFilter('completed')}} control={<Radio checked={filter === 'completed'}/>} label='Completed'/>
                    </Grid>
                </Grid>
            </ListItem>
        </>
    );

    return (
        <List>
            {listItems.length ? list :
                <ListItem>
                    No to do items added yet!
                </ListItem>
            }
        </List>
    )
};

export default TodosList