import { Routes } from "@angular/router";
import { ContactsComponent } from "./contacts/contacts.component";
import { LoginComponent } from "./login/login.component";


export const RoutesConfig: Routes = [
  {
    path:'contacts',
    component:ContactsComponent
  },
  {
  path: '',
  pathMatch:'full',
  redirectTo:'login'
  }
];