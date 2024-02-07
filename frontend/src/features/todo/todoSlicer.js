import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   todos: [
      { id: 1, content: 'Task 1' },
      { id: 2, content: 'Task 2' },
   ],
   dones: [
      { id: 3, content: 'Task 3' },
      { id: 4, content: 'Task 4' },
   ]
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
   removeTodo: (state, action) => {
      state.todos = state.todos.filter(t => t.id !== action.payload)
   },
   addTodo: (state, action) => {
      state.todos.push(action.payload)
   },
   removeDone: (state, action) => {
      state.dones = state.dones.filter(d => d.id !== action.payload)
   },
   addDone: (state, action) => {
      state.dones.push(action.payload)
   },
  },
})

export const { removeTodo, addTodo, removeDone, addDone } = todoSlice.actions
export default todoSlice.reducer