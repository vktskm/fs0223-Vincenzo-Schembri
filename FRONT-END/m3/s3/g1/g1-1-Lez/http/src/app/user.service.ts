import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl: string = 'http://localhost:3000/users';

  constructor(
    private http:HttpClient
  ) { }


  get(){
    return this.http.get<User[]>(this.apiUrl);
  }

  post(user:User){
    return this.http.post<User>(this.apiUrl,user);//il secondo argomento è l'oggetto che si manda al server per la creazione
  }

  put(user:User){
    //ricorda che l'indirizzo è composto da 'http://localhost:3000/users/'+ id dell'utente da aggiornare
    return this.http.put<User>(this.apiUrl + '/' + user.id, user);//il secondo argomento è l'oggetto che si manda al server per l'aggironamento
  }

  delete(id:number){
    //ricorda che l'indirizzo è composto da 'http://localhost:3000/users/'+ id dell'utente da eliminare
    return this.http.delete(this.apiUrl + '/' + id);
  }


}
