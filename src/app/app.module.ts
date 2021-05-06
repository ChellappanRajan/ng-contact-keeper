import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { LoginModule } from '@contact-keeper/login';
import { RoutesConfig } from '@contact-keeper/routes';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { LoginService } from './login/login.service';
import { LogPageEffects, reducer, userInfo } from './store/login';


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
