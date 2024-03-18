import { configureStore, combineReducers } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';

import { userReducer } from "./slices/userSlice";
import { nftProjectsReducer } from "./slices/nftProjectSlice";

export const store = configureStore({
  reducer: combineReducers({
    user: userReducer,
    nftProjects: nftProjectsReducer,
  }),
  middleware: [thunk],
});