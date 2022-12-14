import { createSlice } from "@reduxjs/toolkit";
import {
  __addComment,
  __getCommentById,
  __getComments,
  __modifyComment,
  __removeComment,
} from "../../lib/commentApi";

const initialState = {
  comments: [],
  comment: {},
  isLoading: false, // 서버에서 todos를 가져오는 상태를 나타내는 값
  error: null, // 서버와의 통신이 실패한 경우
  resultMessage: "",
};

export const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    // 댓글 등록
    addComment: (state, action) => {
      state.comments = [...state.comments, action.payload];
    },
    // 댓글 삭제
    removeComment: (state, action) => {
      state.comments = state.comments.filter(
        (comment) => comment.id !== action.payload
      );
    },
    // 댓글 수정
    modifyComment: (state, action) => {
      const { id, comment } = action.payload;
      state.comments = state.comments.map((commentInfo) =>
        commentInfo.id === id ? { ...commentInfo, comment } : commentInfo
      );
    },
    setResultMessage: (state, action) => {
      state.resultMessage = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
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
    [__addComment.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__addComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = [...state.comments];
      state.resultMessage = "정상적으로 등록되었습니다.";
    },
    [__addComment.rejected]: (state, action) => {
      const { status, data } = action.payload.response;
      state.isLoading = false;
      state.error = `${status}에러 ${data.message}`;
      state.resultMessage = "등록에 실패했습니다";
    },
    [__modifyComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__modifyComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comment = { ...state.comment, ...action.payload };
      state.resultMessage = "정상적으로 수정되었습니다.";
    },
    [__modifyComment.rejected]: (state, action) => {
      const { status, data } = action.payload.response;
      state.isLoading = false;
      state.error = `${status}에러 ${data.message}`;
      state.resultMessage = "수정에 실패했습니다";
    },
    [__removeComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__removeComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comment = null;
      state.resultMessage = "정상적으로 삭제되었습니다.";
    },
    [__removeComment.rejected]: (state, action) => {
      const { status, data } = action.payload.response;
      state.isLoading = false;
      state.error = `${status}에러 ${data.message}`;
      state.resultMessage = "삭제에 실패했습니다";
    },
  },
});

export const {
  addComment,
  removeComment,
  modifyComment,
  setResultMessage,
  setError,
} = commentSlice.actions;

export default commentSlice;
