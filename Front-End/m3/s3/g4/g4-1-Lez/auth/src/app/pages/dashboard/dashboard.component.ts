import { Component } from '@angular/core';
import { Ipizza } from './ipizza';
import { PizzaService } from './pizza.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  pizze:Ipizza[] = [];

  newPizza:Partial<Ipizza> = {
    gusto:'',
    prezzo:0
  }

  constructor(private pizzaSvc:PizzaService){}

  ngOnInit(){
    this.pizzaSvc.getAll().subscribe((pizze)=>{
      this.pizze = pizze;
    })
  }

  create(){
    this.pizzaSvc.post(this.newPizza)
    .subscribe(data=>{
      this.pizze.push(data)
    })
  }

  delete(id:number){
    this.pizzaSvc.delete(id)
    .subscribe(data=>{
      let index = this.pizze.findIndex(p => p.id == id)
      this.pizze.splice(index,1)
    })
  }

}
