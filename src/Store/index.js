import { configureStore } from "@reduxjs/toolkit";
import { PostSlice } from "../Slices/PostSlice";
import { userSlice } from "../Slices/UserSlice";

const store = configureStore({
  reducer: { post: PostSlice.reducer,user:userSlice.reducer }
});

export default store;
