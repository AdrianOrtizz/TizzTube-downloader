import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modalSlice",
  initialState: {
    showModal: false,
  },
  reducers: {
    showModal: (state) => {
      state.showModal = true;
    },
    closeModal: (state) => {
      state.showModal = false;
    },
  },
});

export const { showModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
