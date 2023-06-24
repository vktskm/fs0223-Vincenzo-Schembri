import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-model',
  templateUrl: './ng-model.component.html',
  styleUrls: ['./ng-model.component.scss']
})
export class NgModelComponent {

  user:{nome:string, cognome:string} = {
    nome: '',
    cognome : ''
  }


  ngOnInit(){


    setTimeout(()=>{
      this.user.nome = 'Mario';
      this.user.cognome = 'Rossi';
    },5000)

  }


}
