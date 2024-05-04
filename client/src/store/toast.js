import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  message: "",
  type: "",
};

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    setToast: (state, action) => {
      state.status = true;
      state.message = action.payload.message;
      state.type = action.payload.type;
    },

    clearToast: (state) => {
      state.status = false;
      state.message = "";
      state.type = "";
    },
  },
});

export const toastActions = toastSlice.actions;

export default toastSlice.reducer;
