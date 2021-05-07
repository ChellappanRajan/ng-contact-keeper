import { createAction, props } from '@ngrx/store';

export const loadContacts = createAction(
  '[Contacts] Load',
  props<{ userId: string }>()
);

export const loadContactsSuccess = createAction(
  '[Contacts] Load Success',
  props<{ userContacts: Array<any> }>()
);

export const loadContactsFailure = createAction(
  '[Contacts] Load Failed',
  props<{ error: Error | null }>()
);