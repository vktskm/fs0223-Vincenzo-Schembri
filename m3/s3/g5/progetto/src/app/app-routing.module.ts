import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './pages/auth/auth.guard';

//vecchia versione
// const routes: Routes = [
//   { path: '', redirectTo: 'home', pathMatch: 'full'},
//   { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
//   canActivate: [AuthGuard]},
//   { path: 'auth', loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)}
// ];

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'auth', loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)},

  { path: 'home',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
