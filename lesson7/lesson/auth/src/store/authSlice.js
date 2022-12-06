import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  user: {},
};

export const getUser = createAsyncThunk('auth/getUser', async (data) => {
  const res = await axios.post('/auth/signin/local', data);
  const token = res.data;

  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;

  return await axios('/auth/me');
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (store) => {
      store.user = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.user = action.payload.data;
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
