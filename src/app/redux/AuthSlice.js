// myReducer.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import Base_API_Service from '@/API/base_API';
import { API } from '@/API/APIs';
import { middleware } from '@/middleware';

export const postApiData = createAsyncThunk('myReducer/postApiData', async (data) => {
  try {
    const response = await Base_API_Service.post(API.Auth.login,data)
    return response.data
  } catch (error) {
    throw error.response.data;
  }
});

// Create a slice to manage the state
const myReducer = createSlice({
  name: 'myReducer',
  initialState: {
    data: null,
    error: null,
    loading: 'idle', // Redux Toolkit will manage loading state for you
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(postApiData.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(postApiData.fulfilled, (state, action) => {
        state.loading = 'fulfilled';
        state.data = action.payload;
        toast.success("Login sucess",{
          position: "top-center",
          autoClose: 5000,
        })
        middleware(state.loading)
        localStorage.setItem("user",JSON.stringify(action.payload.data))
      })
      .addCase(postApiData.rejected, (state, action) => {
        state.loading = 'rejected';
        state.error = action.error.message;
        toast.error(action.error.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "light",
          });
        console.log(action.error.message,"action")
      });
  },
});

export default myReducer.reducer;
