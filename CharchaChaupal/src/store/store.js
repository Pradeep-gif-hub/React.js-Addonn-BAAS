import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice"; // adjust if your file is named differently

const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});

export default store;
