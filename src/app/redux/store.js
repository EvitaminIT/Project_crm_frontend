// store.js
import { configureStore } from '@reduxjs/toolkit';
import myReducer from './AuthSlice';
import verify_Reducer from './verifySlice'

const store = configureStore({
  reducer: {
    myReducer: myReducer,
    verify_Reducer:verify_Reducer
  },
});

export default store;
