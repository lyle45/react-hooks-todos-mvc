import {useState} from "react";
import Todo from "../models/Todo";

interface UseTodos {
    todos: Todo[],
    setTodos: Function,
    addTodo: Function,
    toggleCompleted: Function,
    deleteTodo: Function
}

const useTodos = (initial: Todo[] = []): UseTodos => {
    const [todos, setTodos] = useState(initial);

    const updateTodos = (todos: Todo[]) => {
        localStorage.setItem('todos', JSON.stringify(todos));
        setTodos(todos)
    };

    const addTodo = (text: string): void => {
        const newTodos = [...todos];
        newTodos.push({
            text,
            completed: false
        });
        updateTodos(newTodos)
    };

    const toggleCompleted = (index: number): void => {
        const newTodos = [...todos];
        const todo = newTodos[index];
        todo.completed = !todo.completed;
        updateTodos(newTodos)
    };

    const deleteTodo = (index: number): void => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        updateTodos(newTodos)
    };

    return {
        todos,
        setTodos,
        addTodo,
        toggleCompleted,
        deleteTodo
    }
}

export default useTodos