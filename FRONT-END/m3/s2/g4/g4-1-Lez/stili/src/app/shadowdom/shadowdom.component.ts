import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-shadowdom',
  templateUrl: './shadowdom.component.html',
  styleUrls: ['./shadowdom.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
  //gli stili globali non funzionano più su questo componente
})
export class ShadowdomComponent {

}
