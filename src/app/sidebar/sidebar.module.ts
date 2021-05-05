import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { NavcontainerModule } from '../navcontainer/navcontainer.module';
import { UserInfoModule } from '../user-info/user-info.module';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    UserInfoModule,
    NavcontainerModule
  ],
  exports:[SidebarComponent]
})
export class SidebarModule { }
