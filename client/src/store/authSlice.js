import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  isAuthorized: false,
  isLoading: false,
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(authorizeUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(authorizeUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthorized = true;
        state.user = action.payload;
      })
      .addCase(authorizeUser.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
      });
  },
});

export const {} = authSlice.actions;

export const authorizeUser = createAsyncThunk(
  'auth/login',
  async (formData, thunkAPI) => {
    try {
      const data = await baseApi('auth', API_METHODS.POST, formData);
      document.cookie = `accessToken = ${data.accessToken}`;

      return data;
    } catch (error) {
      console.log(error);
    }
  },
);

export default authSlice.reducer;
