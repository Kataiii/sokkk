import {combineReducers, configureStore, createAsyncThunk} from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import userReducer from './slices/authSlice';

const rootReducer = combineReducers({
    user: userReducer
  })

export const store = configureStore({
    reducer: {
        user: rootReducer,
    }
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
