import {
  __deletePost,
  __getPostById,
  __getPosts,
  __updatePost,
} from "../../lib/postApi";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  post: null,
  isLoading: false,
  updateSuccess: false,
  deleteSuccess: false,
  error: null,
};

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    initUpdateSuccess: (state) => {
      state.updateSuccess = false;
      state.error = null;
    },
    initDeleteSuccess: (state) => {
      state.deleteSuccess = false;
      state.error = null;
    },
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
    [__getPosts.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__getPosts.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.posts = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [__getPosts.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
    [__updatePost.pending]: (state) => {
      state.isLoading = true;
    },
    [__updatePost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.post = { ...state.post, ...action.payload };
      state.updateSuccess = true;
    },
    [__updatePost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.updateSuccess = false;
    },
    [__deletePost.pending]: (state) => {
      state.isLoading = true;
    },
    [__deletePost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.deleteSuccess = true;
    },
    [__deletePost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.deleteSuccess = false;
    },
  },
});

export const { initUpdateSuccess, initDeleteSuccess } = postSlice.actions;

export default postSlice;
