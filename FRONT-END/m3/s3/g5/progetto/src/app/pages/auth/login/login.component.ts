import { AuthService } from './../auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ILoginData } from 'src/app/interface/ilogin-data';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  data:ILoginData = {
    email: '',
    password: ''
  }


  constructor(private AuthService:AuthService, private router: Router){

  }

  login(){
    this.AuthService.signIn(this.data)
    .subscribe(data => {
      console.log('Sei Loggato')
      this.router.navigate(['/']);
    })
  }





}
