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
            delete state[action.payload]
        },
        toggleCompletion: (state,action) => {
            state[action.payload].completed = !state[action.payload].completed
        }
    }
})

export const selectTodos = (state) => {return state.todos}

export const {addTodo,removeTodo,toggleCompletion} = todos.actions

export default todos.reducer;