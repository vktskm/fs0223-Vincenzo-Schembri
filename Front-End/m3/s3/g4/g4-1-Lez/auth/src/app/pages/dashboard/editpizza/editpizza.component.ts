import { Component } from '@angular/core';
import { Ipizza } from '../ipizza';
import { PizzaService } from '../pizza.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editpizza',
  templateUrl: './editpizza.component.html',
  styleUrls: ['./editpizza.component.scss']
})
export class EditpizzaComponent {

  pizza:Partial<Ipizza> = {
    gusto:'',
    prezzo:0
  }

  constructor(
    private pizzaSvc:PizzaService,
    private router:Router,
    private route:ActivatedRoute
    ){}

  ngOnInit(){

    this.route.params
    .subscribe((params:any)=>{

      this.pizzaSvc.getById(params.id).subscribe((pizza)=>{
          this.pizza = pizza
      })
    })



  }

  edit(){
    this.pizzaSvc.put(this.pizza)
    .subscribe((pizze)=>{
      this.router.navigate(['/dashboard'])
    })
  }
}
