import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Componet1Component } from './componet1/componet1.component';
import { Component2Component } from './component2/component2.component';
import { Componet3Component } from './componet3/componet3.component';

@NgModule({
  declarations: [
    AppComponent,
    Componet1Component,
    Component2Component,
    Componet3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
