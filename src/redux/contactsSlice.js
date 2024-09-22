// src/redux/contactsSlice.js
import { createSlice } from '@reduxjs/toolkit';
import initialContacts from '../../contacts.json'

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: initialContacts,
  },
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.items = state.items.filter(contact => contact.id !== action.payload);
    },
  },
});

// Експорт екшенів
export const { addContact, deleteContact } = contactsSlice.actions;

// Селектор для вибірки контактів
export const selectContacts = (state) => state.contacts.items;

export default contactsSlice.reducer;