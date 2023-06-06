import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgModelComponent } from './forms/ng-model/ng-model.component';
import { FormsModule } from '@angular/forms';
import { ViewChildComponent } from './forms/view-child/view-child.component';

@NgModule({
  declarations: [
    AppComponent,
    NgModelComponent,
    ViewChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
