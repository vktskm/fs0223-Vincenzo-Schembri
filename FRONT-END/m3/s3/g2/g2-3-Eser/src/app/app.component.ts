import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
<app-tdform></app-tdform>
  <hr>
  <app-reactive-form></app-reactive-form>
  </div>
  
  `,
  styles: [``]
})
export class AppComponent {
}
