import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColoraDirective } from './directives/colora.directive';
import { EventoDirective } from './directives/evento.directive';
import { NgNotIfDirective } from './directives/ng-not-if.directive';
import { CutPipe } from './cut.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ColoraDirective,
    EventoDirective,
    NgNotIfDirective,
    CutPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
