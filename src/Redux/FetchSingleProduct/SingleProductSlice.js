import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProductDetailsAsync = createAsyncThunk(
  "singleProduct/fetchProductDetailsAsync",
  async (id, thunkAPI) => {
    try {
      const response = await fetch(`https://test-products-api.onrender.com/Products/${id}`);
      const data = await response.json();
      return data;
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
