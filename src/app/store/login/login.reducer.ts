import { Action, createReducer, on } from '@ngrx/store';
import * as loginActions from './login-page.actions';


export const userInfo = 'userInfo';

export type StoreStatus = 'pending' | 'loading' | 'success' | 'error';

export interface LoadState<T> {
  data: T | null;
  status: StoreStatus;
  error: Error | null;
}

export interface LoginState {
    isLoggedIn: boolean;
    username: string,
}
export interface State extends LoadState<LoginState> {
}

export const initialState: State = {
    data:{
        isLoggedIn: false,
        username:'',
    },
    status:'pending',
    error:null
};


const loginReducer = createReducer(
    initialState,
    on(loginActions.loginSuccess, (state,{ username }) => ({ ...state, data:{isLoggedIn:true, username}, status:'success',error:null })),
    on(loginActions.loginFailure, (state,{error})=>({...state,data:{isLoggedIn:false, username:''}, status:'error', error  }))
  );
  
  export function reducer(state: State | undefined, action: Action) {
    return loginReducer(state, action);
  }