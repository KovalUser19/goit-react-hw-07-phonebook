import { configureStore } from "@reduxjs/toolkit";
import {filterReducer} from './filterSlice'
import { contactReduser} from "./contactSlice";
/* import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'; */


export const store = configureStore({
  reducer: {
    filter: filterReducer,
    contact: contactReduser,
  },
  /* middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }) */
});
/* export const persistor = persistStore(store) */