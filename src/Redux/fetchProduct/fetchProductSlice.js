import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProductsAsync = createAsyncThunk(
  "products/fetchProductsAsync",
  async (_, thunkAPI) => {
    try {
      const response = await fetch("https://ellemart-e-commerce-sabry-api.herokuapp.com/Products");
      const data = await response.json();
      // console.log("data", data);
      return data;
    } catch (error) {}
  }
);

const productsCollection = createSlice({
  name: "products",
  initialState: { products: [], loading: false, error: null, productView: true },
  reducers: {
    gridViewAction: state => {
      state.productView = true;
    },
    listViewAction: state => {
      state.productView = false;
    },
  },
  extraReducers: {
    [fetchProductsAsync.pending]: state => {
      state.loading = true;
    },
    [fetchProductsAsync.fulfilled]: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    [fetchProductsAsync.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export const { listViewAction, gridViewAction } = productsCollection.actions;
export default productsCollection.reducer;
