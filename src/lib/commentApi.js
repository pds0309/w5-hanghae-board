import axios from "../components/instance/axiosCommentInstance";
import { createAsyncThunk } from "@reduxjs/toolkit";

// 댓글 목록 조회
export const __getComments = createAsyncThunk(
  "getComments",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get(`/?postId=${payload}`);
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
      const response = await axios.get(`/${payload}`);
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
      const response = await axios.post("", payload);
      return thunkAPI.fulfillWithValue(response.data);
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
      await axios.delete(`/${payload.id}`, {
        data: { ...payload },
      });
      return thunkAPI.fulfillWithValue(payload);
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
      await axios.patch(`/${payload.id}`, payload);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
