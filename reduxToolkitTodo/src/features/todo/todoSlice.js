import { createSlice, nanoid } from "@reduxjs/toolkit"; // nonoid generates unique ids
import exp from "constants";
import { act } from "react";

const initialState = {
    todos: [{id: 1, test: "first todo"}]
}

export const todoSlice = createSlice({
    name: 'todo', 
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload, 
            }
            state.todos.push(todo)
        }, 
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }, 

    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer