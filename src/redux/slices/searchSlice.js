import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isSearch: '',
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setIsSearch(state, action) {
      state.isSearch = action.payload
    },
  },
})

export const { setIsSearch } = searchSlice.actions
export default searchSlice.reducer
