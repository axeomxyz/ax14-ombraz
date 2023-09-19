import { configureStore } from '@reduxjs/toolkit'
import requests from './slices/handler'

const store = configureStore({
  reducer: {
    // Define a top-level state field named `todos`, handled by `todosReducer`
    requests
  }
})

export default store