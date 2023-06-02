import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-none',
  templateUrl: './none.component.html',
  styleUrls: ['./none.component.scss'],
  encapsulation: ViewEncapsulation.None
  //stili diventano globali
})
export class NoneComponent {

}
