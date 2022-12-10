import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    // TODO: 액션 정의
  },
});

export const {} = postSlice.actions;

export default postSlice;
