import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: JSON.parse(localStorage.getItem("single")) || [],
};

const singleSlice = createSlice({
  name: "single",
  initialState,
  reducers: {
    toggleSingle: (state, action) => {
      let index = state.value.findIndex((i) => i.id === action.payload.id);
      if (index < 0) {
        state.value = [...state.value, action.payload];
      } else {
        state.value = state.value.filter((i) => i.id !== action.payload.id);
      }
      localStorage.setItem("single", JSON.stringify(state.value));
    },
  },
});

export const { toggleSingle } = singleSlice.actions;
export default singleSlice.reducer;
