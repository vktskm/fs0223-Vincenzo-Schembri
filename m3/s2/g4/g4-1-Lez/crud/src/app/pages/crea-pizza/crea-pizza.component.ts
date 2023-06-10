import { Component } from '@angular/core';
import { Pizza } from 'src/app/pizza';
import { PizzeService } from 'src/app/pizze.service';

@Component({
  selector: 'app-crea-pizza',
  templateUrl: './crea-pizza.component.html',
  styleUrls: ['./crea-pizza.component.scss']
})
export class CreaPizzaComponent {

  pizza:Pizza = new Pizza('',0);


  constructor(private pizzeSvc: PizzeService){}

  create(){
    this.pizzeSvc.addPizza(this.pizza)
    .then(res => console.log(res));
  }

}
