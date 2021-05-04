import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[Login Page] Login',
  props<{ username: string; password: string }>()
);

export const loginSuccess = createAction(
  '[Login Page] Login Success',
  props<{ username: string }>()
);

export const loginFailure = createAction(
  '[Login Page] Login Failed',
  props<{ error: Error | null }>()
);