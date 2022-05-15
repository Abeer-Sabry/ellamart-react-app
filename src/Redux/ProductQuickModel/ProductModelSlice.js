import { createSlice } from "@reduxjs/toolkit";

const productModel = createSlice({
  name: "productView",
  initialState: { showModel: false, singleProduct: {} },
  reducers: {
    getSingleProduct: (state, action) => {
      state.singleProduct = action.payload;
      state.showModel = true;
      console.log(state.singleProduct);
    },
  },
});

export const { getSingleProduct } = productModel.actions;
export default productModel.reducer;
