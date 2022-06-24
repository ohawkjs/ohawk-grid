import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OhGGridHeaderStylesPipe } from './oh-g-grid-header-styles/oh-g-grid-header-styles.pipe';



@NgModule({
    declarations: [
        OhGGridHeaderStylesPipe
    ],
    exports: [
        OhGGridHeaderStylesPipe
    ],
    imports: [
        CommonModule
    ]
})
export class OhGGridStylePipesModule { }
