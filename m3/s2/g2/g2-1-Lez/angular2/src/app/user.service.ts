import { Injectable } from '@angular/core';
import { User } from './Models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl:string = 'https://jsonplaceholder.typicode.com/users';

  constructor() {
  }

  getAllUsers():Promise<User[]>{
    return fetch(this.apiUrl).then(res => res.json())
  }


}
