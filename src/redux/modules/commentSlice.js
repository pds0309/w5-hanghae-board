import { createSlice } from "@reduxjs/toolkit";
import {
  __addComment,
  __getCommentById,
  __getComments,
  __removeComment,
  __toggleEditComment,
} from "../../lib/commentApi";

const initialState = {
  comments: [],
  comment: {},
  isLoading: false, // 서버에서 todos를 가져오는 상태를 나타내는 값
  isRemove: false, // 댓글 삭제여부 판단
  isModify: false, // 댓글 수정여부 판단
  error: null, // 서버와의 통신이 실패한 경우
};

export const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    // 삭제여부 플래그 변경
    setIsRemove: (state, action) => {
      state.isRemove = action.payload;
    },
    // 수정여부 플래그 변경
    setIsModify: (state, action) => {
      state.isModify = action.payload;
    },
    // 댓글 편집 상태 변경
    setOnEdit: (state, action) => {
      const { id, onEdit } = action.payload;
      state.comments = state.comments.map((comment) =>
        comment.id === id ? { ...comment, onEdit } : comment
      );
    },
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
    [__addComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__removeComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__toggleEditComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  setIsRemove,
  setIsModify,
  setOnEdit,
  addComment,
  removeComment,
} = commentSlice.actions;

export default commentSlice;
