import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateDrivenComponent } from './pages/template-driven/template-driven.component';
import { ReactingComponent } from './pages/reacting/reacting.component';

const routes: Routes = [
  { path: '',
   component: TemplateDrivenComponent
  },
  {
    path: 'reacting',
    component: ReactingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
