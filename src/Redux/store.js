import { configureStore } from "@reduxjs/toolkit";
// SLICES
import products from "./fetchProduct/fetchProductSlice";
import productModel from "./ProductQuickModel/ProductModelSlice";
import singleProduct from "./FetchSingleProduct/SingleProductSlice";
import navContent from "./FetchNavContent/NavContentSlice";
import cart from "./cart/cartSlice";
// PERSIST
import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
  products: products,
  productModel: productModel,
  singleProduct: singleProduct,
  navContent: navContent,
  cart: cart,
});

const persistConfig = {
  key: "root",
  storage,
};
const persistReducers = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistReducers,
  // reducer: {
  //   products: products,
  //   productModel: productModel,
  //   singleProduct: singleProduct,
  //   navContent: navContent,
  //   cart: cart,
  // },
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});
export default store;
