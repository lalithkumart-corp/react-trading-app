import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import themeReducer from '../reducers/theme';
import authReducer from '../reducers/auth';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    gsTheme: themeReducer,
    auth: authReducer
  },
});
