import { Component } from '@angular/core';

@Component({
  selector: 'app-style-class',
  templateUrl: './style-class.component.html',
  styleUrls: ['./style-class.component.scss']
})
export class StyleClassComponent {

  success:boolean = false;
  color:string = 'red';

}
