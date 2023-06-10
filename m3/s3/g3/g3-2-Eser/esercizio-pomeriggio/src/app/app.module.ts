import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppComponent } from './app.component';
import { FavoritesComponent } from './favorites.component';
import { ErrorsInterceptor } from './errors.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { PhotoCardComponent } from './components/photo-card.component';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ScrollingModule as smexperimental } from "@angular/cdk-experimental/scrolling";
import { ScrollingModule } from "@angular/cdk/scrolling";
@NgModule({
  declarations: [
    AppComponent,
    FavoritesComponent,
    PhotoCardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    MatToolbarModule,
    ScrollingModule,
    smexperimental
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:ErrorsInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
