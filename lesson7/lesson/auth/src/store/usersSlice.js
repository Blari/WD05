import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  users: [],
};

export const removeUser = createAsyncThunk('user/remove', async (id) => {
  const response = axios.delete('/users/' + id);
  return response.data;
});

export const getUsers = createAsyncThunk('users/get', async () => {
  const response = await axios('/users');
  return response.data;
});

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.users = action.payload.rows;
    });
    builder.addCase(removeUser.fulfilled, (state, action) => {
      console.log(action);
    });
  },
});

export default usersSlice.reducer;
