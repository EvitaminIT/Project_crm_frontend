// store.js
import { configureStore } from '@reduxjs/toolkit';
import myReducer from './slices/AuthSlice';
import verify_Reducer from './slices/verifySlice'
import LogoutSlice from './slices/LogoutSlice';

const store = configureStore({
  reducer: {
    myReducer: myReducer,
    verify_Reducer:verify_Reducer,
    LogoutSlice:LogoutSlice
  },
});

export default store;
