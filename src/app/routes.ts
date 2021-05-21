import { Routes } from "@angular/router";
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
        loadChildren:async ()=> (await import('@ck/about')).AboutModule 
      },
      {
        path:'add-contact',
        loadChildren:async()=>(await import('@ck/add-contact')).AddContactModule
      }
    ]
  },
  {
  path: '',
  pathMatch:'full',
  redirectTo:'login'
  }
];