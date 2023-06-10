import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  data:{email:string, password:string} = {
    email: '',
    password: '',
  }

  constructor(
    private authService:AuthService
  ){}

  login(){
    this.authService.login(this.data)
    .subscribe(data =>{
      alert('Sei loggato')
      console.log(data);

    })
  }

}
