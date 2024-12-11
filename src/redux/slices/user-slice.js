import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    value: JSON.parse(localStorage.getItem("user")) || [],
    status: "create",
    updatingData: null,
  },
  reducers: {
    addUser(state, action) {
      state.value.push(action.payload);
      localStorage.setItem("user", JSON.stringify(state.value));
      state.status = "create";
    },
    saveUser(state, action) {
      state.updatingData = action.payload;
      state.status = "update";
      console.log("saveUser");
    },
    updateUser: (state, action) => {
      const index = state.value.findIndex(
        (item) => item.id == action.payload.id
      );
      if (index !== -1) {
        state.value.splice(index, 1, action.payload);
        state.status = "create";
        state.updatingData = null;
        localStorage.setItem("user", JSON.stringify(state.value));
      }
    },
    deleteUser: (state, action) => {
      const index = state.value.findIndex((item) => item.id == action.payload);
      if (index !== -1) {
        state.value.splice(index, 1);
        localStorage.setItem("user", JSON.stringify(state.value));
      }
    },
  },
});

export const { addUser, saveUser, updateUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
