import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemeRoutingModule } from './meme-routing.module';
import { MemeComponent } from './meme.component';


@NgModule({
  declarations: [
    MemeComponent
  ],
  imports: [
    CommonModule,
    MemeRoutingModule
  ]
})
export class MemeModule { }
