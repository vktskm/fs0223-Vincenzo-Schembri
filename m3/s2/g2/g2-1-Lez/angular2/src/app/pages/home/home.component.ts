import { Component } from '@angular/core';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  users:any[] = []

  constructor(private userSvc: UserService){

    userSvc.getAllUsers()
    .then(users => this.users = users);

  }




}
