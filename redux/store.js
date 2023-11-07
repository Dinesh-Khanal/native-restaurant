import { configureStore } from "@reduxjs/toolkit";
import basketSlice from "./basket-slice";
const store = configureStore({
  reducer: {
    basket: basketSlice,
  },
});
export default store;
