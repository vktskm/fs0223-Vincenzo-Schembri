import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompletedRoutingModule } from './completed-routing.module';
import { CompletedComponent } from './completed.component';


@NgModule({
  declarations: [
    CompletedComponent
  ],
  imports: [
    CommonModule,
    CompletedRoutingModule
  ]
})
export class CompletedModule { }
