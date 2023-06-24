import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './Pages/todo/todo.component';
import { CompletedComponent } from './Pages/completed/completed.component';
import { EditTodoComponent } from './Components/edit-todo/edit-todo.component';

const routes: Routes = [
  {
    path:'',
    component: TodoComponent
  },
  {
    path:'completed',
    component: CompletedComponent
  },
  {
    path:'edit/:id',
    component: EditTodoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
