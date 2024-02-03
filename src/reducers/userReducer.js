import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Thunk to get all user
export const getUsers = createAsyncThunk("users/getUsers", async (page = 1) => {
  const response = await axios.get(
    `https://randomuser.me/api/?results=50&page=${page}`
  );
  return response.data.results;
});

// Slice for user reducer and actions to filter users
const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    status: "idle",
    error: null,
    filter: {
      gender: "all",
      nationality: "all",
      name: "",
    },
  },
  reducers: {
    setGender(state, action) {
      state.filter.gender = action.payload;
    },
    setNationality(state, action) {
      state.filter.nationality = action.payload;
    },
    setName(state, action) {
      state.filter.name = action.payload;
    },
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
      });
  },
});

export const { setGender, setNationality, setName } = usersSlice.actions;
export default usersSlice.reducer;
