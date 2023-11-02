// store.js
import { configureStore } from '@reduxjs/toolkit';
import myReducer from './AuthSlice';

const store = configureStore({
  reducer: {
    myReducer: myReducer,
    // Add other reducers here if needed
  },
});

export default store;
