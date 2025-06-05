import {configureStore} from '@reduxjs/toolkit';

import UserReducer from '../slice/UserSlice';

const mystore = configureStore({
  reducer: UserReducer,
});

export type RootState = ReturnType<typeof mystore.getState>;
export type AppDispatch = typeof mystore.dispatch;
export default mystore;
