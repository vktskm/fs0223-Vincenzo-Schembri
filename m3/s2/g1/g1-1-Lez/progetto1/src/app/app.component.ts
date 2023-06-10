import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'progetto1';

  pizze:string[] = ['Margherita','Diavola','Marinara'];

  constructor(){

    setTimeout(() => {
        this.title = 'Nuovo valore'
    }, 3000);

  }

}
