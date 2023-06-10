import { Component } from '@angular/core';
import { Pizza } from 'src/app/Models/pizza';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  menuPizze:Pizza[] = [];

  addPizza(pizza:Pizza) {
    this.menuPizze.push(pizza);
  }

}
