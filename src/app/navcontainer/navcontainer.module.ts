import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavcontainerComponent } from './navcontainer.component';
import { NavlistModule } from '../navlist/navlist.module';



@NgModule({
  declarations: [
    NavcontainerComponent
  ],
  imports: [
    CommonModule,
    NavlistModule
  ],
  exports:[NavcontainerComponent]
})
export class NavcontainerModule { }
