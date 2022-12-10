import { __getPostById } from "../../lib/postApi";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  post: null,
  isLoading: false,
  error: null,
};

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    // TODO: 액션 정의
  },
  extraReducers: {
    [__getPostById.pending]: (state) => {
      state.isLoading = true;
    },
    [__getPostById.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.post = action.payload;
    },
    [__getPostById.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = postSlice.actions;

export default postSlice;
