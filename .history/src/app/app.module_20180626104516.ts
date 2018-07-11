import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatOptionModule,
  MatSelectModule } from '@angular/material';

import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { CardCreationComponent } from './card-creation/card-creation.component';

@NgModule({
  declarations: [
    AppComponent,
    CardCreationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
