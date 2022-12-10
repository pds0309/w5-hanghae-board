import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// 댓글 목록 조회
export const __getComments = createAsyncThunk(
  "getComments",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/comments/?postId=${payload}`
      );
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 댓글 조회
export const __getCommentById = createAsyncThunk(
  "getCommentById",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/comments/${payload}`
      );
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 댓글 등록
export const __addComment = createAsyncThunk(
  "addComment",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/comments",
        payload
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 댓글 삭제
export const __removeComment = createAsyncThunk(
  "removeComment",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.delete(
        `http://localhost:3001/comments/${payload}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 댓글 수정
export const __modifyComment = createAsyncThunk(
  "modifyComment",
  async (payload, thunkAPI) => {
    try {
      const { id, comment } = payload;
      const response = await axios.patch(
        `http://localhost:3001/comments/${id}`,
        {
          comment,
        }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 댓글 편집여부 토글
export const __toggleEditComment = createAsyncThunk(
  "toggleEditComment",
  async (payload, thunkAPI) => {
    try {
      const { id, onEdit } = payload;
      const response = await axios.patch(
        `http://localhost:3001/comments/${id}`,
        {
          onEdit,
        }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
