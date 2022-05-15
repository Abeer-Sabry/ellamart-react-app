import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProductsAsync = createAsyncThunk("products/fetchProductsAsync", async (_, thunkAPI) => {
  try {
    const response = await fetch("https://ellemart-e-commerce-sabry-api.herokuapp.com/Products");
    const data = await response.json();
    // console.log("data", data);
    return data;
  } catch (error) {}
});

const productsCollection = createSlice({
  name: "products",
  initialState: { products: [], loading: false, error: null },
  extraReducers: {
    [fetchProductsAsync.pending]: (state, action) => {
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

export default productsCollection.reducer;
