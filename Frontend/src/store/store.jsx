import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/UserSlice'
import productReducer from './reducers/ProductSlice'
import cartReducer from './reducers/CartSlice'

export const store = configureStore({
  reducer: {
    userReducer,    
    productReducer,
    cartReducer        
  }
})
