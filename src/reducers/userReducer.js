import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Thunk to get all user
export const getUsers = createAsyncThunk("users/getUsers", async (page = 1) => {
  const response = await axios.get(
    `https://randomuser.me/api/?results=50&page=${page}`
  );
  return response.data.results;
});

export const getUserDetails = createAsyncThunk(
  "users/getUserDetails",
  async (userId) => {
    const response = await axios.get(
      `https://randomuser.me/api/?seed=${userId}`
    );
    return response.data.results[0];
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    status: "idle",
    error: null,
  },
  extraReducers(builder) {
    builder
      .addCase(getUsers.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = [...state.users, ...action.payload];
        state.error = null;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getUserDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUserDetails.fulfilled, (state, action) => {
        state.users = [action.payload, ...state.users];
        state.status = "succeeded";
        state.error = null;
      })
      .addCase(getUserDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default usersSlice.reducer;
