import { configureStore } from '@reduxjs/toolkit';
import todos from '../features/todo/todoSlice.js'

export const store = configureStore({
  reducer: {
    todos:todos
  },
});
