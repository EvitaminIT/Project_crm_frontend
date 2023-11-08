// myReducer.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import Base_API_Service from '@/API/base_API';
import { API } from '@/API/APIs';
import { setCookie,deleteCookie } from 'cookies-next';


export const verify_token_api = createAsyncThunk('verify_Reducer/verify_token_api', async (data) => {
  try {
    console.log("work")
    const response = await Base_API_Service.post(API.token.verify,data)
    return response.status
  } catch (error) {
    console.log(error.status)
    throw error;
  }
});

// Create a slice to manage the state
const verify_Reducer = createSlice({
  name: 'verify_Reducer',
  initialState: {
    status: null,
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(verify_token_api.fulfilled, (state, action) => {
        state.status = 200;
        console.log(action.payload,"action")
      })
      .addCase(verify_token_api.rejected, (state, action) => {
        state.status = 400;
        deleteCookie("token");
        setCookie('tokenErr',400)
      });
  },
});

export default verify_Reducer.reducer;
