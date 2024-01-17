import { createSelector } from "@reduxjs/toolkit";

export const selectFilter = state => state.filter.filter;

 export const selectContact = state => state.contact.contacts.items;
/* export const selectContact = state => {
  console.log("State in selectContact:", state);
  return state.contact.contacts.items;
}; */

export const selectIsLoading = state => state.contact.contacts.isLoading;

export const selectError = state => state.contact.contacts.error;

export const selectVisibleContacts = createSelector(
[ selectContact, selectFilter],
  (items,filter) => {
    console.log('items', items);
    console.log('filter', filter);
   return items.filter(contact => contact.name.toLowerCase()
    .includes(filter.toLowerCase()))
 }
)