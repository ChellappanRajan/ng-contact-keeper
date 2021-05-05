import { Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ContactsComponent } from "./contacts/contacts.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";


export const RoutesConfig: Routes = [
  {
    path:'contacts',
    component:HomeComponent,
    children:[
      {
        path:'',
        component: ContactsComponent
      },
      {
        path:'about',
        component: AboutComponent
      }
    ]
  },
  {
  path: '',
  pathMatch:'full',
  redirectTo:'login'
  }
];