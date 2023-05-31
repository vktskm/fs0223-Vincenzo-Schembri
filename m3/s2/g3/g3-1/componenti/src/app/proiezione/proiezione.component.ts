import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-proiezione',
  templateUrl: './proiezione.component.html',
  styleUrls: ['./proiezione.component.scss']
})
export class ProiezioneComponent {

  @Input() titolo!:string;

}
