import React, { useState } from "react";
import Confetti from "react-dom-confetti";
import { toggleCompletion,removeTodo } from "./todoSlice.js";
import { useDispatch } from "react-redux";


export const Todo = ({
    todo
}) => {

    // Set next Added todo Background Color 
    const chooseTodoColor = (previousColor) => { //choose todo item background color based on previous todo bg color
        switch (previousColor) {
            case 'blue':
                return 'red'
            case 'red':
                return'green'
            case 'green':
                return'orange'
            case 'orange':
                return'blue'
            default:
                return'blue'
        }
    }
    const bgColors = {
        blue: 'rgba(69, 123, 157, 0.25)',
        red: 'rgba(230, 57, 70, 0.25)',
        green: 'rgba(88, 129, 87, 0.25)',
        orange: 'rgba(247, 127, 0, 0.25)'

    }






    return (
            <div className="todo-item container">
                <div className="todo-buttons">
                    <button id='remove' className="todo-button container">Remove</button>
                    <button id='done' className="todo-button container">Done</button>
                </div>
                <p id='todo-text'> sss</p>
            </div>
    )
}