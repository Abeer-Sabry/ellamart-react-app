import { createSlice } from "@reduxjs/toolkit";

const productModel = createSlice({
  name: "productView",
  initialState: { showModel: false, modelProduct: {} },
  reducers: {
    getSingleProduct: (state, action) => {
      state.modelProduct = action.payload;
      state.showModel = true;
    },
    closeModal: state => {
      state.showModel = false;
      state.modelProduct = {};
    },
  },
});

export const { getSingleProduct, closeModal } = productModel.actions;
export default productModel.reducer;
