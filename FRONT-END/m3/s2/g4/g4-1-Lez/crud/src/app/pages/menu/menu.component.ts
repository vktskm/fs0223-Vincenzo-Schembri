import { Component, OnInit } from '@angular/core';
import { IPizza } from 'src/app/ipizza';
import { PizzeService } from 'src/app/pizze.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  pizze:IPizza[] = [];
  loading:boolean = true;

  constructor(private pizzeSvc:PizzeService){}

  ngOnInit(){

    this.getPizze();

  }


  delete(id?:number){

    this.pizzeSvc.deletePizza(id)
    .then(res => {


      console.log('pizza Eliminata');
      this.getPizze();

    })
  }

  getPizze(){
    this.pizzeSvc.getPizze().then(pizzeResponse =>{
      this.pizze = pizzeResponse;
      this.loading = false;
    })
  }

}
