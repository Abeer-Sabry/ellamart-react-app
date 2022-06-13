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
    closeModal: (state, action) => {
      state.showModel = false;
      console.log(state.singleProduct);
    },
  },
});

export const { getSingleProduct, closeModal } = productModel.actions;
export default productModel.reducer;
