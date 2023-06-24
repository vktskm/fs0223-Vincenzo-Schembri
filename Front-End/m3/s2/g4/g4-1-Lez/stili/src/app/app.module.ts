import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmulatedComponent } from './emulated/emulated.component';
import { ShadowdomComponent } from './shadowdom/shadowdom.component';
import { NoneComponent } from './none/none.component';
import { FiglioComponent } from './figlio/figlio.component';

@NgModule({
  declarations: [
    AppComponent,
    EmulatedComponent,
    ShadowdomComponent,
    NoneComponent,
    FiglioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
