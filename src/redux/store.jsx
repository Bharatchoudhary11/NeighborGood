import { configureStore } from '@reduxjs/toolkit'
import category from './reducer/category'

export default configureStore({
  reducer: {
    category:category
  }
})