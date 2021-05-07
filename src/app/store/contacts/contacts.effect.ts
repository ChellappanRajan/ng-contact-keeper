import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import * as ContactActions from './contacts.actions';

@Injectable()
export class ContactsEffects {
  constructor(private store:Store,private actions$: Actions) {}
  
  loadContacts$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ContactActions.loadContacts),
        exhaustMap(({userId}) =>
          of([]).pipe(
            map(user => ContactActions.loadContactsSuccess({userContacts:[]})),
            catchError(error => of(ContactActions.loadContactsFailure({ error })))
          )
        )
      ),
    { useEffectsErrorHandler: false }
  );

}