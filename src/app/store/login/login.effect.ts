import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, of } from 'rxjs';
import { catchError, exhaustMap, map, switchMap, tap } from 'rxjs/operators';
import { LoginService } from 'src/app/login/login.service';
import { login, loginFailure, loginSuccess } from './login-page.actions';

@Injectable()
export class LogPageEffects {
  constructor(private store:Store,private actions$: Actions,private loginService:LoginService) {}
  
  logins$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(login),
        exhaustMap(({username,password}) =>
          this.loginService.login({username,password}).pipe(
            map(user => loginSuccess({ username:'Varatharajan' })),
            catchError(error => of(loginFailure({ error })))
          )
        )
      ),
    { useEffectsErrorHandler: false }
  );

}