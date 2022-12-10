import { createSlice } from "@reduxjs/toolkit";
import {
  __addComments,
  __getCommentById,
  __getComments,
} from "../../lib/commentApi";

const initialState = {
  comments: [],
  comment: {},
  isLoading: false, // 서버에서 todos를 가져오는 상태를 나타내는 값
  error: null, // 서버와의 통신이 실패한 경우
};

export const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    // 댓글 등록
    addComment: (state, action) => {
      state.comments = [...state.comments, action.payload];
    },
  },
  extraReducers: {
    [__getComments.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__getComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = action.payload;
    },
    [__getComments.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__getCommentById.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__getCommentById.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comment = action.payload;
    },
    [__getCommentById.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__addComments.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { addComment } = commentSlice.actions;

export default commentSlice;
