import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './Pages/todo/todo.component';
import { CompletedComponent } from './Pages/completed/completed.component';
import { HeaderComponent } from './Components/header/header.component';
import { FormsModule } from '@angular/forms';
import { AddTodoComponent } from './Components/add-todo/add-todo.component';
import { EditTodoComponent } from './Components/edit-todo/edit-todo.component';
import { ProgressBarComponent } from './Components/progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    CompletedComponent,
    HeaderComponent,
    AddTodoComponent,
    EditTodoComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProgressBarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
