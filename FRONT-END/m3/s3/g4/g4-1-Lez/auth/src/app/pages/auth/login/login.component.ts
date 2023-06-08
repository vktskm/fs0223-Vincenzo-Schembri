import { Component } from '@angular/core';
import { LoginData } from '../interfaces/login-data';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private authSvc: AuthService
  ){}


  data:LoginData = {
    email: '',
    password: ''
  }

  login(){
    this.authSvc.login(this.data)
    .subscribe(accessData => {
      alert(`Sei loggato come ${accessData.user.name}`)
    })
  }

}
