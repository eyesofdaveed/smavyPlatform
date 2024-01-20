import { API_METHODS, baseApi } from '@api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthorized: false,
  isLoading: false,
  user: null,
};

export const authorizeUser = createAsyncThunk(
  'auth/login',
  async (formData, thunkAPI) => {
    try {
      const response = await baseApi('auth', API_METHODS.POST, formData);

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: state => {
      state.isAuthorized = false;
      state.user = null;
    },
    setCookie: state => {
      state.isAuthorized = true;
      state.isLoading = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(authorizeUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(authorizeUser.fulfilled, (state, action) => {
        if (!action.payload.success) return;
        state.isLoading = false;
        state.isAuthorized = true;
        state.user = action.payload;
      })
      .addCase(authorizeUser.rejected, state => {
        state.isLoading = false;
        state.isAuthorized = false;
        state.user = null;
      });
  },
});

export const { setCookie, logout } = authSlice.actions;

export default authSlice.reducer;
