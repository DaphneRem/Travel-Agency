import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule, MatCheckboxModule } from '@angular/material';

import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
