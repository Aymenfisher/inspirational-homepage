import { createSlice } from "@reduxjs/toolkit";

const todos = createSlice({
    name:'todos',
    initialState:{},
    reducers:{
        addTodo: (state,action) => {
            state[action.payload.id]={
                id:action.payload.id,
                text:action.payload.text,
                completed:action.payload.completed
            }
        },
        removeTodo: (state,action) =>{
            Object.fromEntries(Object.entries(state).filter((todo) => todo.id !== action.payload.id))
        },
        toggleCompletion: (state,action) => {
            state[action.payload.id].completed = !state[action.payload.id].completed
        }
    }
})

export const selectTodos = (state) => {return state.todos}

export const {addTodo,removeTodo,toggleCompletion} = todos.actions

export default todos.reducer;