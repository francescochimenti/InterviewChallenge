import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserById = createAsyncThunk(
  "users/fetchByIdStatus",
  async (userId, thunkAPI) => {
    const response = await axios.get(`https://randomuser.me/api/`);
    return response.data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: [],
    status: null,
  },
  extraReducers: {
    [fetchUserById.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchUserById.fulfilled]: (state, action) => {
      state.status = "success";
      state.user = action.payload;
    },
    [fetchUserById.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default userSlice.reducer;
