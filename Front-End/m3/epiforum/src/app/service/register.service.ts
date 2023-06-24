import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IauthResponse } from '../interfaces/IauthResponse';
import { IregisterUser } from '../interfaces/IregisterUser';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  userUrl: string = 'http://localhost:3000/users';
  constructor(private http: HttpClient) {}

  submit(form: IregisterUser) {
    return this.http.post<IauthResponse>(this.userUrl, form);
  }
}
