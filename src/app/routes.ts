import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";


export const RoutesConfig: Routes = [{
  path: '',
  pathMatch:'full',
  redirectTo:'login'
}];