import { configureStore } from "@reduxjs/toolkit";
import { PostSlice } from "../Slices/PostSlice";

const store = configureStore({
  reducer: { post: PostSlice.reducer }
});

export default store;
