import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { ISignUpData } from 'src/app/interface/isign-up-data';
import { AuthService } from '../auth.service';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  data: ISignUpData = {
    email: '',
    password: '',
    name: '',
    surname: ''
  }

  myForm!: FormGroup;

  constructor(private authService: AuthService, private router: Router){}

  register(){
    this.authService.signUp(this.data)
    .subscribe(res =>
      this.router.navigate(['/']));
  }


  /* this.router.navigate(['/']); */
  /* this.data = {
    email: '',
    password: '',
    name: '',
    surname: ''
  } */
}
