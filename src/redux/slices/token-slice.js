import { createSlice } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
  name: "token",
  initialState: {
    value: JSON.parse(localStorage.getItem("token")) || null,
  },
  reducers: {
    signIn(state, action) {
      state.value = action.payload;
    },
    signOut(state) {
      state.value = null;
    },
  },
});

export const { signIn, signOut } = tokenSlice.actions;

export default tokenSlice.reducer;
