import { Component, EventEmitter, Input, Output } from '@angular/core';

type Pizza = {
  gusto:string,
  prezzo:number,
  ingredienti:string
}

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent {

  //con #input predispongo la proprietà menu, come proveniente dall'esterno
  @Input() menu!:Pizza[];

  //predispongo un eventEmitter, ossia un meccanismo che emette finti eventi
  //il finto evento in questione si chimerà onDelete
  @Output() onDelete = new EventEmitter();

  delete(gusto:string){
    this.onDelete.emit(gusto);//l'evento viene scatenato
  }

}
