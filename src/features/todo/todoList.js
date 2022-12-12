import React from "react";
import { Todo } from "./todo";
import { selectTodos } from "./todoSlice.js";
import { useSelector } from "react-redux";

export const TodoList = () => {

    const todos = Object.entries(useSelector(selectTodos));

    return (
        <div className="todo-list">
            {todos.map((todo,index) => { return <Todo todo={todo[1]} key={todo[0]} index={index} /> })}
        </div>

    )
}