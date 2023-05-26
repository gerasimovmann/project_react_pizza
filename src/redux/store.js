import { configureStore } from '@reduxjs/toolkit'
import filterSlice from './slices/filterSlice'
import paginationSlice from './slices/paginationSlice'
import searchSlice from './slices/searchSlice'
import basketSlice from './slices/basketSlice'
import pizzasSlice from './slices/pizzasSlice'

export const store = configureStore({
  reducer: {
    filterSlice,
    searchSlice,
    paginationSlice,
    basketSlice,
    pizzasSlice,
  },
})
