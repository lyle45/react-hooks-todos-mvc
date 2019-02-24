import React, {useState} from 'react'
import {Button, FormControlLabel, Grid, List, ListItem, Radio, Typography} from "@material-ui/core";

import Todo from '../../models/Todo'

import TodoItem from '../TodoItem/TodoItem'
import ListControls from '../ListControls/ListControls'


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
            <ListControls filter={filter} setFilter={setFilter} count={listItems.length}/>
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