import { Component } from '@angular/core';
import { LoginData } from '../interfaces/login-data';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private authSvc: AuthService,
    private router: Router
  ){}


  data:LoginData = {
    email: '',
    password: ''
  }

  login(){
    this.authSvc.login(this.data)
    .subscribe(accessData => {
        this.router.navigate(['/dashboard'])
    })
  }

}
