import React,{useState} from "react";
import { useDispatch } from "react-redux";
import {addTodo} from '../features/todo/todoSlice.js'
import {v4 as uuidV4} from 'uuid';

export const TodoForm = () => {
    const [todo,setTodo] = useState('');


    const dispatch = useDispatch();

    const handleChange = (e) => {
        setTodo(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if (!todo){
            return
        }
        dispatch(addTodo({
            id: uuidV4(),
            text:todo.replace(/\s+/g, ' ').trim(),
            completed:false
        }))
        setTodo('')
    }


    return(
        <form onSubmit={handleSubmit} className='todo-form container'>
            <label htmlFor="todo-input" id='input-label'>What's on your mind today?</label>
            <input type='text' value={todo} id='todo-input' onChange={handleChange}></input>
        </form>
    )
}