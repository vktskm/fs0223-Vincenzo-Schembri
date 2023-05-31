import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PizzaComponent } from './menu/pizza/pizza.component';
import { ProiezioneComponent } from './proiezione/proiezione.component';
import { CardComponent } from './card/card.component';
import { LocalVariable } from './proiezione/contentchild.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PizzaComponent,
    ProiezioneComponent,
    CardComponent,
    LocalVariable
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
