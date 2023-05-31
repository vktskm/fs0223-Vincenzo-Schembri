import { Component } from '@angular/core';

@Component({
  selector: 'app-prop',
  templateUrl: './prop.component.html',
  styleUrls: ['./prop.component.scss']
})
export class PropComponent {

  title:string = 'Componente prop';

  visibile:boolean = true

  toggle(evento:Event){

    console.log(evento);//oggetto contenente info sull'evento
    this.visibile = !this.visibile;//inverto il valore booleano
  }

}
