import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers.component';
import { Pagina2Component } from './pagina2/pagina2.component';

const routes: Routes = [
  { path: '', component: CustomersComponent },
  { path: 'sottopagina', component: Pagina2Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
