import React from "react";
import { Todo } from "./todo";
import { selectTodos } from "./todoSlice.js";
import { useSelector } from "react-redux";

export const TodoList = () => {

    const todos = useSelector(selectTodos);

    return (
        <div className="todo-list">
            {todos.map((todo) => <Todo todo={todo}/>)}
        </div>

    )
}