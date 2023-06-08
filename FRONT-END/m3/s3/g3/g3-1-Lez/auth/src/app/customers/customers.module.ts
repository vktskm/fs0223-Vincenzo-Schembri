import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { Pagina2Component } from './pagina2/pagina2.component';


@NgModule({
  declarations: [
    CustomersComponent,
    Pagina2Component
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
