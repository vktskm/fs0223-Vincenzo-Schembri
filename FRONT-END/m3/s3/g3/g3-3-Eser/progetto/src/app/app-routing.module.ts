import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'todo', loadChildren: () => import('./pages/todo/todo.module').then(m => m.TodoModule) },
  { path: 'completed', loadChildren: () => import('./pages/completed/completed.module').then(m => m.CompletedModule) },
  { path: 'register', loadChildren: () => import('./pages/auth/register/register.module').then(m => m.RegisterModule) },
  { path: 'login', loadChildren: () => import('./pages/auth/login/login.module').then(m => m.LoginModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
