import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      let newBasket = [...state.items];
      let itemIndex = state.items.findIndex(
        (item) => item.id == action.payload.id
      );
      if (itemIndex >= 0) {
        newBasket.splice(itemIndex, 1);
      } else {
        console.log("can't remove item as its not in the basket");
      }
      state.items = newBasket;
    },
    emptyBasket: (state, action) => {
      state.items = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket, emptyBasket } =
  basketSlice.actions;
// to prevent unnecessary rerender memoizing selector by using createSelector, for detail see https://react-redux.js.org/api/hooks
// createSelector(input selector1, input selector2, callback function)
export const selectBasketItems = (state) => state.basket.items;

export const selectBasketItemsById = createSelector(
  selectBasketItems,
  (_, id) => id,
  (selectBasketItems, id) => selectBasketItems.filter((item) => item.id == id)
);

export const selectBasketTotal = createSelector(
  selectBasketItems,
  (selectBasketItems) =>
    selectBasketItems.reduce((total, item) => (total = total += item.price), 0)
);

export default basketSlice.reducer;
