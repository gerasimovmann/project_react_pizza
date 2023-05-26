import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchPizzas = createAsyncThunk(
  'pizzas/pizzasSlices',
  async (params) => {
    const { searchText, sortRequest, categoryRequest, page, limitItem } = params
    const { data } =
      !!searchText === true
        ? await axios.get(
            `https://641cb100b556e431a874a0e4.mockapi.io/dataPizza?search=${searchText}`
          )
        : await axios.get(
            `https://641cb100b556e431a874a0e4.mockapi.io/dataPizza?${page}&limit=${limitItem}&${categoryRequest}&${sortRequest}`
          )

    return data
  }
)

export const fetchAllPizzas = createAsyncThunk(
  'pizzas/allPizzaSlices',
  async () => {
    const { data } = await axios.get(
      'https://641cb100b556e431a874a0e4.mockapi.io/dataPizza'
    )
    return data
  }
)

const initialState = {
  data: [],
  allData: [],
  status: 'loading', // 'loading' || 'success' || 'error'
}

const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    setItems(state, action) {
      state.data = action.payload
    },
  },
  extraReducers: {
    [fetchPizzas.pending]: (state) => {
      state.status = true
      state.status = 'loading'
    },
    [fetchPizzas.fulfilled]: (state, action) => {
      state.data = action.payload
      state.status = 'success'
    },
    [fetchPizzas.rejected]: (state) => {
      state.status = 'error'
      state.data = []
      state.allData = []
    },

    [fetchAllPizzas.pending]: (state) => {
      state.status = 'loading'
    },
    [fetchAllPizzas.fulfilled]: (state, action) => {
      state.allData = action.payload
    },
    [fetchAllPizzas.rejected]: (state) => {
      state.status = 'error'
      state.data = []
    },
  },
})

export const { setItems } = pizzasSlice.actions

export default pizzasSlice.reducer
