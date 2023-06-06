import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'http';


  constructor(private userSvc:UserService){}

  userArr:User[] = [];


  ngOnInit(): void {

    this.userSvc.get().subscribe(res => {//mi iscrivo all'observable
      this.userArr = res;//appena ricevuti i dati vado a popolare l'array userArr per mostrare i dati in arrivo
    })

  }




}
