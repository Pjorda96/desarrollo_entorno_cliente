import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SelectorComponent } from './selector/selector.component';
import { TablaComponent } from './tabla/tabla.component';
import { BotonesComponent } from './botones/botones.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectorComponent,
    AppComponent,
    TablaComponent,
    BotonesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
