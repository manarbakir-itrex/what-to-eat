import {
  configureStore, ThunkAction, Action, createReducer,
} from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    counter: createReducer({}, () => {
    }),
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
