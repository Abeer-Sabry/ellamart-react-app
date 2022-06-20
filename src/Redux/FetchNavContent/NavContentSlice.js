import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getNavContentAsync = createAsyncThunk(
  "navContent/getNavContentAsync",
  async (_, thunkAPI) => {
    try {
      const data = await fetch("https://amazon-navbar.herokuapp.com/fetch");
      const res = await data.json();
      console.log("contentNav", res);
      return res;
    } catch (error) {}
  }
);

const navContent = createSlice({
  name: "sideNav",
  initialState: {
    // responsible for storing the all data that goes into the navbar
    entryStore: [],
    // responsible for opening and closing the subContainer
    subContainer: false,
    // responsible for storing the subContainer entries
    subContainerEntries: [],
  },
  reducers: {
    subContainerOpen: state => {
      state.subContainer = true;
    },
    subContainerClose: state => {
      state.subContainer = false;
    },
  },
  extraReducers: {
    [getNavContentAsync.pending]: state => {},
    [getNavContentAsync.fulfilled]: (state, action) => {
      state.entryStore = action.payload;
    },
    [getNavContentAsync.rejected]: state => {},
  },
});
export const { subContainerOpen, subContainerClose } = navContent.actions;
export default navContent.reducer;
