// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Counter/CounterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
