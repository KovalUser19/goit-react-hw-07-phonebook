import { createSlice } from "@reduxjs/toolkit";
import { deleteContact, fetchContacts, addContact } from "./operation";
/* import storage from "redux-persist/lib/storage";
import {persistReducer } from "redux-persist"
 */
const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null
  }
};

const handlePending = state => {
  state.contacts.isLoading = true;
};

const handleRejected = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};

 const contactSlice = createSlice({
  name: 'contact',
  initialState,
   extraReducers: builder => {
     builder
       .addCase(fetchContacts.pending, handlePending)
       .addCase(fetchContacts.fulfilled, (state, action) => {
         state.contacts.isLoading = false;
         state.contacts.error = null;
         state.contacts.items = action.payload;
       })
       .addCase(fetchContacts.rejected, handleRejected)
       .addCase(addContact.pending, handlePending)
       .addCase(addContact.fulfilled, (state, action) => {
           console.log("Current state:", state);
  console.log("Action payload:", action.payload);

         state.contacts.isLoading = false;
         state.contacts.error = null;
           /* state.contacts.items.push(action.payload) */
           state.contacts.items = [...state.contacts.items, action.payload];

       })
       .addCase(addContact.rejected, handleRejected)
       .addCase(deleteContact.pending, handlePending)
       .addCase(deleteContact.fulfilled, (state, action) => {
         state.contacts.isLoading = false;
         state.contacts.error = null;
         state.contacts.items = state.contacts.items.filter(el => el.id !== action.payload.id);
       })
   }
    /* addContact: (state, action) => {
      state.contacts = [...state.contacts, action.payload];
    },
    onDeleteContact: (state, action) => {
      state.contacts = state.contacts.filter(el => el.id !== action.payload);
    }, */

});

/* const persistConfig = {
  key: 'contact',
  storage,
}; */
/* export const pesistContactReduser = persistReducer(
  persistConfig, contactSlice.reducer); */

export const contactReduser = contactSlice.reducer;
 /* export const {fetchContacts, addContact, deleteContact } = contactSlice.actions; */
