import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { EditpizzaComponent } from './editpizza/editpizza.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'edit/:id', component: EditpizzaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
