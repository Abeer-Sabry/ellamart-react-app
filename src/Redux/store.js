import { configureStore } from "@reduxjs/toolkit";
import products from "./fetchProduct/fetchProductSlice";
import productModel from "./ProductQuickModel/ProductModelSlice";
import singleProduct from "./FetchSingleProduct/SingleProductSlice";
import navContent from "./FetchNavContent/NavContentSlice";
const store = configureStore({
  reducer: {
    products,
    productModel,
    singleProduct,
    navContent,
  },
});
export default store;
