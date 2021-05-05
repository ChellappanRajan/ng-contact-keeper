import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavcontainerComponent } from './navcontainer.component';

import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavcontainerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[NavcontainerComponent]
})
export class NavcontainerModule { }
