import { combineReducers, configureStore, createAsyncThunk } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { userReducer } from '../features/auth/redux/authSlice';
import { shopReducer } from '../features/shop/redux/shopSlice';
import { walletReducer } from '../features/wallet/redux/walletSlice';
import { enableMapSet } from 'immer';

const rootReducer = combineReducers({
  user: userReducer,
  wallet: walletReducer,
  shop: shopReducer
})

//nenableMapSet()

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
}

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']