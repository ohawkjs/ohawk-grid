import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {OhGModule} from './ohg/oh-g/oh-g.module';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        OhGModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
