import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: [{ content: "hello" }],
};

export const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    // TODO: 액션 정의
  },
});

export const {} = commentSlice.actions;

export default commentSlice;
