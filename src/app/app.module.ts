import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CertsComponent } from './certs/certs.component';

@NgModule({
  declarations: [
    AppComponent,
    CertsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent,CertsComponent]
})
export class AppModule { }
