
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

import { IloginUser } from '../interfaces/IloginUser';
import { IregisterUser } from '../interfaces/IregisterUser';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  userUrl: string = 'http://localhost:3000/users'

  constructor(private http: HttpClient) { }

  editProfile(form: NgForm, id: number) {
    return this.http.put<IregisterUser>(this.userUrl + "/" + id, form.value)
  }
}
