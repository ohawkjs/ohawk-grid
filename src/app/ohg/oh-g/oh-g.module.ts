import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OhGComponent } from './oh-g.component';



@NgModule({
  declarations: [
    OhGComponent
  ],
  exports: [
    OhGComponent
  ],
  imports: [
    CommonModule
  ]
})
export class OhGModule { }
