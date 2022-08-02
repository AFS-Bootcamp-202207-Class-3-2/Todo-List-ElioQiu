import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    {
        id: "cc53dc26-61b0-406b-99dd-b8825dd2ceec",
        text: "todo example",
        done: false
    },
]

export const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.push({
                id: Date.now(),
                text: action.payload,
                done: false,
            })
        },
        doneTodo: (state, action) => {
            state.map(todo => {
                if(todo.id === action.payload){
                    todo.done = !todo.done;
                }
            })
        },
        
    }
})

export const { addTodo, doneTodo, removeTodo } = todosSlice.actions;
export default todosSlice.reducer; 