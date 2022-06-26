import { createSlice } from "@reduxjs/toolkit";

export const PostSlice = createSlice({
  name: "Post",
  initialState: { post: [] },
  reducers: {
    getPost(state, action) {
      state.post = action.payload;
    },
    addPost(state, action) {
      console.log(action.payload);
      const newPost = action.payload;
      state.post = state.post.concat(newPost);
    },
    deletePost(state, action) {
      state.post = state.post.filter((post) => post._id !== action.payload);
      return state;
    },
    editPost(state, action) {
      return state;
    },
    likePost(state, action) {
      state.post = state.post.map((post) => {
        console.log(action.payload);
        if (post._id === action.payload.postId)
          post.like = post.like.concat(action.payload.authorId);
        return post;
      });
    },
    dislikePost(state, action) {
      state.post = state.post.map((eachpost) => {
        if (eachpost._id === action.payload.postId)
          eachpost.dislike = eachpost.dislike.concat(action.payload.authorId);
        return eachpost;
      });
    }
  }
});

export const postAction = PostSlice.actions;
