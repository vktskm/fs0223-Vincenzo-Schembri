import { Component } from '@angular/core';
import { User } from '../Models/user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  nome:string = '';
  cognome:string = '';

  user:User = new User('Mario','Rossi');

}
