import React from "react";
import Confetti from "react-dom-confetti";
import { toggleCompletion, removeTodo } from "./todoSlice.js";
import { useDispatch } from "react-redux";


export const Todo = ({
    todo,
    index
}) => {

    const dispatch = useDispatch();

    const handleRemoveTodo = () => {
        dispatch(removeTodo(todo.id))
    }
    const handleCompletedTodo = () => {
        dispatch(toggleCompletion(todo.id))
    }

    const bgColorsClassNames = ['blue-background ','red-background ','green-background ','orange-background ']
    const bgClassName = bgColorsClassNames[index%bgColorsClassNames.length]


    return (
        <div className={"todo-item container"+" "+bgClassName+(todo.completed ? ' completed-todo' : '')}>
            <div className="todo-buttons">
                <button id='remove' className="todo-button container" onClick={handleRemoveTodo}>Remove</button>
                <button id='done' className="todo-button container" onClick={handleCompletedTodo}><Confetti active={todo.completed} config={{ spread: 360,startVelocity: 15,duration:1500}} />{todo.completed ? 'Redo' : 'Done'}</button>
            </div>
            <p id='todo-text'> {todo.text}</p>
        </div>
    )
}