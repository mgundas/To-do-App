import { configureStore } from '@reduxjs/toolkit'
import todoReducer from "./features/todo/todoSlicer"

export default configureStore({
  reducer: {
    todo: todoReducer
  },
})