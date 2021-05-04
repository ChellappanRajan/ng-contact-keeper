import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { LoginModule } from '@contact-keeper/login';
import { RoutesConfig } from '@contact-keeper/routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    RouterModule.forRoot(RoutesConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
