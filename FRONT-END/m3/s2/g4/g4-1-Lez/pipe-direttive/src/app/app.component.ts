import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pipe-direttive';

  display:boolean = true;

  pizza:any = {
    gusto:'Diavola',
    prezzo: 1
  };

  oggi:number = new Date().getTime();

  testo:string = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque eligendi nemo eveniet sunt id officia iusto perferendis accusamus quo, eum eaque dolorem ipsum magnam. Repellendus debitis eaque sequi cum optio.'

}
