import { Component, EventEmitter, Output } from '@angular/core';
import { Pizza } from 'src/app/Models/pizza';

@Component({
  selector: 'app-add-pizza',
  templateUrl: './add-pizza.component.html',
  styleUrls: ['./add-pizza.component.scss']
})
export class AddPizzaComponent {

  pizza:Pizza = new Pizza('',0);

  @Output() onCreate = new EventEmitter();

  create(){
    this.onCreate.emit(this.pizza);
  }

}
