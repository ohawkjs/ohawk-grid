import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OhGComponent } from './oh-g.component';
import {OhGGridStylePipesModule} from '../pipes/oh-g-grid-style-pipes/oh-g-grid-style-pipes.module';



@NgModule({
  declarations: [
    OhGComponent
  ],
  exports: [
    OhGComponent
  ],
    imports: [
        CommonModule,
        OhGGridStylePipesModule
    ]
})
export class OhGModule { }
