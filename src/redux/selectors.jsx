import { createSelector } from "@reduxjs/toolkit";

export const selectFilter = state => state.filter.filter;

 export const selectContact = state => state.contact.contacts.items;
/* export const selectContact = state => {
  console.log("State in selectContact:", state);
  return state.contact.contacts.items;
}; */

export const selectIsLoading = state => state.contact.contacts.isLoading;

export const selectError = state => state.contact.contacts.error;

 /* export const selectVisibleContacts = createSelector(
[ selectContact, selectFilter],
  (items, filter) => {
     console.log('items', items);
   return items.filter(contact => contact.name.toLowerCase()
    .includes(filter.toLowerCase()))
 }
) */
export const selectVisibleContacts = createSelector(
  [selectContact, selectFilter],
  (items, filter) => {
    return items.filter(contact => {
      const contactName = (contact.name || '').toString(); // Convert to string and handle undefined
      if (typeof contactName === 'string') {
        return contactName.toLowerCase().includes(filter.toLowerCase());
      } else {
        console.error('Invalid contact name:', contact.name);
        return false; // Exclude the contact with an invalid name
      }
    });
  }
);
