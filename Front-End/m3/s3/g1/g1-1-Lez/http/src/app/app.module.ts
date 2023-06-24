import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { UserInterceptor } from './user.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule//questo per poter usare l'HttpClient
  ],
  providers: [
    {//con questo oggetto attivo a tutti gli effetti l'interceptor
      provide: HTTP_INTERCEPTORS,
      useClass: UserInterceptor,//la classe dell'interceptor da collegare
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
