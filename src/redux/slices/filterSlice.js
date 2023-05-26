import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isCategory: 'all',
  sorts: 'rating',
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.isCategory = action.payload
    },
    setSort(state, action) {
      state.sorts = action.payload
    },
    setFilterQuery(state, action) {
      state.isCategory = action.payload
      state.sorts = action.payload
    },
  },
})

export const { setCategoryId, setSort } = filterSlice.actions
export default filterSlice.reducer
