import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
  basketItems: [],
  amountBasketItems: 0,
  totalItems: 0,
  totalCost: 0,
}

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    setBasketItems(state, action) {
      state.basketItems.push(action.payload)
      state.amountBasketItems = state.basketItems.reduce(
        (total, item) => total + item.amount,
        0
      )
      state.totalItems = state.basketItems.length
      state.totalCost = state.basketItems.reduce(
        (acc, el) => acc + el.price * el.amount,
        0
      )
    },
    incrementAmountItem(state, action) {
      const index = action.payload
      state.basketItems[index].amount += 1
      state.amountBasketItems = state.basketItems.reduce(
        (total, item) => total + item.amount,
        0
      )
      state.totalItems = state.basketItems.length
      state.totalCost = state.basketItems.reduce(
        (acc, el) => acc + el.price * el.amount,
        0
      )
    },
    decrementAmountItem(state, action) {
      const index = action.payload
      state.basketItems[index].amount -= 1
      state.amountBasketItems = state.basketItems.reduce(
        (total, item) => total + item.amount,
        0
      )
      state.totalItems = state.basketItems.length
      state.totalCost = state.basketItems.reduce(
        (acc, el) => acc + el.price * el.amount,
        0
      )
    },

    deleteItem(state, action) {
      const index = action.payload
      state.basketItems = state.basketItems.filter((_el, id) => id !== index)
      state.amountBasketItems = state.basketItems.reduce(
        (total, item) => total + item.amount,
        0
      )
      state.totalItems = state.basketItems.length
      state.totalCost = state.basketItems.reduce(
        (acc, el) => acc + el.price * el.amount,
        0
      )
    },

    deleteAll(state) {
      state.basketItems = []
      state.amountBasketItems = 0
      state.totalItems = 0
      state.totalCost = 0
    },
  },
})

export const {
  setBasketItems,
  incrementAmountItem,
  decrementAmountItem,
  deleteItem,
  deleteAll,
} = basketSlice.actions
export default basketSlice.reducer
