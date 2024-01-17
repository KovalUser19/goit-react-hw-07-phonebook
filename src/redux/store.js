import { configureStore } from "@reduxjs/toolkit";
import {filterReducer} from './filterSlice'
import { contactReduser} from "./contactSlice";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    contact: contactReduser,
  },
});
