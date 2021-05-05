import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavlistComponent } from './navlist.component';



@NgModule({
  declarations: [
    NavlistComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[NavlistComponent]
})
export class NavlistModule { }
