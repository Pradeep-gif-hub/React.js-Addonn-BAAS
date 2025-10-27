import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, text: "Delete me, I am not a ToDo" }
];

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: nanoid(),
        text: action.payload
      });
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
