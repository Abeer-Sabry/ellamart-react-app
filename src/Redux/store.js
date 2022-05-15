import { configureStore } from "@reduxjs/toolkit";
import products from "./fetchProduct/fetchProductSlice";
import productModel from "./ProductQuickModel/ProductModelSlice";
import singleProduct from "./FetchSingleProduct/SingleProductSlice";
const store = configureStore({
  reducer: {
    products,
    productModel,
    singleProduct,
  },
});
export default store;
