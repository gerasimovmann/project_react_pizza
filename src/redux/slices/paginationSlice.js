import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  limitItem: 6,
  currentPage: 1,
}

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload
    },
    incrementCurrentPage(state) {
      state.currentPage += 1
    },
    decrementCurrentPage(state) {
      state.currentPage -= 1
    },
    setLimitItem(state, action) {
      state.limitItem = action.payload
    },
  },
})

export const {
  setCurrentPage,
  setLimitItem,
  incrementCurrentPage,
  decrementCurrentPage,
} = paginationSlice.actions
export default paginationSlice.reducer
