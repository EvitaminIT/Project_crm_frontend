import { createSlice, createAction } from '@reduxjs/toolkit';

// Define the logout action
export const logout = createAction('LogoutReducer/logout');

const logoutSlice = createSlice({
  name: 'LogoutReducer',
  initialState: {
    data: null,
    error: null,
    loading: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(logout, (state) => {
        state.loading = 'idle'; // Reset loading state to 'idle' when logging out
      });
  },
});

export const { /* export other reducer actions if needed */ } = logoutSlice.actions;
export default logoutSlice.reducer;

  