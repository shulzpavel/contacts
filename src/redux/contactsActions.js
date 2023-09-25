export const ADD_CONTACT = 'ADD_CONTACT';
export const DELETE_CONTACT = 'DELETE_CONTACT';
export const SORT_CONTACTS = 'SORT_CONTACTS';

export const addContact = (contact) => ({
  type: ADD_CONTACT,
  payload: contact,
});

export const deleteContact = (contactIndex) => ({
  type: DELETE_CONTACT,
  payload: contactIndex,
});

export const sortContacts = (sortBy) => ({
  type: SORT_CONTACTS,
  payload: sortBy,
});

export const searchContact = (searchWord) => ({
  type: 'SEARCH_CONTACTS',
  payload: searchWord,
});