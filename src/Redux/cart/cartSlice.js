import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { cartItems: [] },
  reducers: {
    // responsible for Adding Items To Cart
    addToCart: (state, action) => {
      const Item = state.cartItems.find(item => item.id === action.payload.id);
      state.cartItems = Item
        ? state.cartItems.map(item =>
            item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
          )
        : [...state.cartItems, { ...action.payload, qty: 1 }];
    },
    // responsible for decreasing the quantity of cart items
    decreaseQty: (state, action) => {
      const item = state.cartItems.find(item => item.id === action.payload.id);
      state.cartItems =
        item?.qty === 1
          ? state.cartItems.filter(item => item.id !== action.payload.id)
          : state.cartItems.map(item =>
              item.id === action.payload.id ? { ...item, qty: item.qty - 1 } : item
            );
    },
    // responsible for removing item from cart
    deleteCartItem: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
    },
    // responsible for removing all items from cart
    clearCart: state => {
      state.cartItems = [];
    },
  },
});

export const { addToCart, decreaseQty, deleteCartItem } = cartSlice.actions;
export default cartSlice.reducer;
