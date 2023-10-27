import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import dataSlice from '../store/getData/slice';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import commonSlice from '../store/common/slice';


export const store = configureStore({
  reducer: {
    data: dataSlice,
    common: commonSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
