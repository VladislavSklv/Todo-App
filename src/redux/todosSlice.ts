import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ITodo {
    id: number;
    text: string; 
    isActive: boolean;
}

const initialState = {todos: []} as {todos: ITodo[]};

const todoSlice = createSlice({
    initialState,
    name: 'todos',
    reducers: {
        addTodo: (state, action: PayloadAction<ITodo>) => {
            state.todos.push(action.payload);
        },
        removeTodo: (state, action: PayloadAction<number>) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        }
    }
});

export const {addTodo, removeTodo} = todoSlice.actions;
export default todoSlice.reducer;