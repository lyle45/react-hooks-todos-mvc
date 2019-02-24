import React, {useState} from 'react'
import {TextField} from "@material-ui/core";

interface Props {
    addTodo: Function
}

const TodoForm = (props: Props): JSX.Element => {
    const {addTodo} = props;

    const [newTodo, setNewTodo] = useState('');

    const handleKeyDown: React.KeyboardEventHandler = (e): void => {
        if (newTodo && e.which === 13) {
            addTodo(newTodo);
            setNewTodo('')
        }
    };

    return (
        <TextField
            value={newTodo}
            label="Create a To Do Item!"
            onKeyDown={handleKeyDown}
            onChange={(e) => {setNewTodo(e.target.value)}}
            fullWidth
        />
    )
};

export default TodoForm