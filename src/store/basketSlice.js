import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
  name: "basket",

  initialState: {
    basket: [],
    totalSum: 0,
  },
  reducers: {
    addCoffee(state, action) {
      state.basket.push(action.payload);
      state.totalSum = state.basket.reduce(
        (acc, el) => acc + el.price * el.quantity,
        0
      );
    },
    changeQuantity(state, action) {
      const item = state.basket.find(
        (item) =>
          item.name === action.payload.name &&
          item.size === action.payload.size &&
          item.syrup === action.payload.syrup &&
          item.sugar === action.payload.sugar
      );
      item.quantity += 1;
      state.totalSum = state.basket.reduce(
        (acc, el) => acc + el.price * el.quantity,
        0
      );
    },
    decreaseQuantity(state, action) {
      const item = state.basket.find(
        (item) =>
          item.name === action.payload.name &&
          item.size === action.payload.size &&
          item.syrup === action.payload.syrup &&
          item.sugar === action.payload.sugar
      );
      if (item.quantity > 1) {
        item.quantity -= 1;
        state.totalSum = state.basket.reduce(
          (acc, el) => acc + el.price * el.quantity,
          0
        );
      } else {
        item.quantity -= 1;
        state.basket = state.basket.filter((item) => item.quantity > 0);
        state.totalSum = state.basket.reduce(
          (acc, el) => acc + el.price * el.quantity,
          0
        );
      }
    },
  },
});

export const { addCoffee, changeQuantity, decreaseQuantity } =
  basketSlice.actions;
export default basketSlice.reducer;
