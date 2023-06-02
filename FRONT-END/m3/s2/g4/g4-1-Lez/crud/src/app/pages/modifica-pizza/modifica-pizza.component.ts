import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pizza } from 'src/app/pizza';
import { PizzeService } from 'src/app/pizze.service';

@Component({
  selector: 'app-modifica-pizza',
  templateUrl: './modifica-pizza.component.html',
  styleUrls: ['./modifica-pizza.component.scss']
})
export class ModificaPizzaComponent {

  pizza:Pizza = new Pizza('',0);


  constructor(
    private pizzeSvc: PizzeService,
    private router: ActivatedRoute
    ){}

  ngOnInit(){

    this.router.params
    .subscribe((params:any) =>{//è come un then

      //params.id è l'id della pizza che voglio richiamare, e si trova nella rotta attuale
      //a questo punto chiedo al server di darmi la pizza corrispondente all'id
      this.pizzeSvc.getPizzaSingola(params.id)
      .then(res => {

        this.pizza = res;

      })

    })

  }

  update(){
    this.pizzeSvc.updatePizza(this.pizza)
    .then(res => console.log(res));
  }

}
