import { Action, createReducer, on } from '@ngrx/store';
import * as loginActions from './contacts.actions';
import { Contacts } from './contacts.model';


export const contacts = 'contacts';

export type StoreStatus = 'pending' | 'loading' | 'success' | 'error';

export interface LoadState<T> {
  data: T | null;
  status: StoreStatus;
  error: Error | null;
}

export interface ContactsData {
  userContacts: Contacts[]
}
export interface ContactsState extends LoadState<ContactsData> {
}

export const initialState: ContactsState = {
    data:{
      userContacts:[
        {
          name:'Chellappan',
          email:'chellappan@gmail.com',
          phoneNumber:8754638712,
          jobtitleAndCompany:'Senior Consultant',
          profilePicture:'',
          isFavourite:false
        },
        {
          name:'Chellappan',
          email:'chellappan@gmail.com',
          phoneNumber:8754638712,
          jobtitleAndCompany:'Senior Consultant',
          profilePicture:'',
          isFavourite:false
        },
        {
          name:'Chellappan',
          email:'chellappan@gmail.com',
          phoneNumber:8754638712,
          jobtitleAndCompany:'Senior Consultant',
          profilePicture:'',
          isFavourite:false
        },
        {
          name:'Chellappan',
          email:'chellappan@gmail.com',
          phoneNumber:8754638712,
          jobtitleAndCompany:'Senior Consultant',
          profilePicture:'',
          isFavourite:false
        },
        {
          name:'Chellappan',
          email:'chellappan@gmail.com',
          phoneNumber:8754638712,
          jobtitleAndCompany:'Senior Consultant',
          profilePicture:'',
          isFavourite:false
        },
        {
          name:'Chellappan',
          email:'chellappan@gmail.com',
          phoneNumber:8754638712,
          jobtitleAndCompany:'Senior Consultant',
          profilePicture:'',
          isFavourite:false
        }, {
          name:'Chellappan',
          email:'chellappan@gmail.com',
          phoneNumber:8754638712,
          jobtitleAndCompany:'Senior Consultant',
          profilePicture:'',
          isFavourite:false
        }, {
          name:'Chellappan',
          email:'chellappan@gmail.com',
          phoneNumber:8754638712,
          jobtitleAndCompany:'Senior Consultant',
          profilePicture:'',
          isFavourite:false
        }, {
          name:'Chellappan',
          email:'chellappan@gmail.com',
          phoneNumber:8754638712,
          jobtitleAndCompany:'Senior Consultant',
          profilePicture:'',
          isFavourite:false
        }
      ]
    },
    status:'pending',
    error:null
};


const contactReducer = createReducer(
    initialState,
    on(loginActions.loadContactsSuccess, (state,{ userContacts }) => ({ ...state, data:{userContacts}, status:'success',error:null })),
    on(loginActions.loadContactsFailure, (state,{error})=>({...state, status:'error', error  }))
  );
  
  export function reducer(state: ContactsState | undefined, action: Action) {
    return contactReducer(state, action);
  }