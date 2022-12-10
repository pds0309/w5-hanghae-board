import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// 예시
// export const __getTodos = createAsyncThunk(
//   "getTodos",
//   async (payload, thunkAPI) => {
//     try {
//       const response = await axios.get("http://localhost:3001/todos");
//       return thunkAPI.fulfillWithValue(response.data);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );
