import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ActiveComponent } from './active/active.component';
import { UnactiveComponent } from './unactive/unactive.component';

const routes: Routes = [{
     path: '',
     component: HomeComponent },
     {
      path: 'active',
      component: ActiveComponent },

      {
        path: 'unactive',
        component: UnactiveComponent }
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
