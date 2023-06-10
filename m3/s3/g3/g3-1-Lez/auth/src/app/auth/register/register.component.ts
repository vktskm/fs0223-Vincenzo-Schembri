import { Component } from '@angular/core';
import { AuthService, SignupData } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  data:SignupData = {
    email: '',
    password: '',
    name: '',
    surname: ''
  }

  constructor(
    private authService:AuthService
  ){}

  register(){
    this.authService.signUp(this.data)
    .subscribe(res => console.log(res.user));
  }

}
