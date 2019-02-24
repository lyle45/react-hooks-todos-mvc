import React from 'react'

import Todo from '../../models/Todo'
import {Checkbox, IconButton, ListItem, ListItemSecondaryAction, ListItemText, Typography} from "@material-ui/core";
import {Delete} from '@material-ui/icons'

interface Props {
    todo: Todo,
    index: number,
    toggleCompleted: Function,
    deleteTodo: Function
}

const TodoItem = (props: Props): JSX.Element => {
    const {todo, toggleCompleted, deleteTodo, index} = props;
    return (
        <ListItem dense button onClick={(): void => {
            toggleCompleted(index)
        }}>
            <Checkbox
                checked={todo.completed}
                tabIndex={-1}
                disableRipple
            />
            <ListItemText primary={
                <Typography color={todo.completed ? 'textSecondary' : 'default'}>
                    {todo.text}
                </Typography>
            }/>
            <ListItemSecondaryAction>
                <IconButton
                    aria-label="Comments"
                    onClick={(): void => {
                        deleteTodo(index)
                    }}
                >
                    <Delete/>
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
};

export default TodoItem