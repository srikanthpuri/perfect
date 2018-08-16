import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PorductComponent } from './porduct/porduct.component';
import { DataService } from './data.service';
import { ProductxComponent } from './productx/productx.component';
@NgModule({
  declarations: [
    AppComponent,
    PorductComponent,
    ProductxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
