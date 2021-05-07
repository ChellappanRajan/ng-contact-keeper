import { createSelector } from '@ngrx/store';
import { ContactsState } from '.';

const contactsState = (state:any) => state.contacts;

export const getContacts = createSelector(
  contactsState,
  (state: ContactsState) => state.data?.userContacts
);
