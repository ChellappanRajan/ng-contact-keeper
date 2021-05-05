import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginModule } from '@contact-keeper/login';
import { RoutesConfig } from '@contact-keeper/routes';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducer, userInfo,LogPageEffects } from './store/login';
import { LoginService } from './login/login.service';
import { ContactsModule } from './contacts/contacts.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LoginModule,
    HomeModule,
    RouterModule.forRoot(RoutesConfig),
    StoreModule.forRoot({[userInfo]:reducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: true }),
    EffectsModule.forRoot([LogPageEffects]),
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
