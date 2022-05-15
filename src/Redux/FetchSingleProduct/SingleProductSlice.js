import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProductDetailsAsync = createAsyncThunk(
  "singleProduct/fetchProductDetailsAsync",
  async (title, thunkAPI) => {
    try {
      const response = await fetch(`https://ellemart-e-commerce-sabry-api.herokuapp.com/Products?title=${title}`);
      const data = await response.json();
      console.log("data", data[0]);
      return data[0];
    } catch (error) {}
  }
);

const productSlice = createSlice({
  name: "singleProduct",
  initialState: { singleProduct: {}, loading: false, error: null },
  extraReducers: {
    [fetchProductDetailsAsync.pending]: state => {
      state.loading = true;
    },
    [fetchProductDetailsAsync.fulfilled]: (state, action) => {
      state.loading = false;
      state.singleProduct = action.payload;
    },
    [fetchProductDetailsAsync.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default productSlice.reducer;
