import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, map, tap } from 'rxjs';
import { IauthResponse } from 'src/app/interfaces/IauthResponse';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { IloginUser } from 'src/app/interfaces/IloginUser';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  jwtHelper: JwtHelperService = new JwtHelperService();

  loginUrl: string = 'http://localhost:3000/login';

  private authSubject = new BehaviorSubject<null | IauthResponse>(null);

  user$ = this.authSubject.asObservable();

  isLoggedIn$ = this.user$.pipe(map((dato) => Boolean(dato)));

  authLogoutTimer: any;

  constructor(private http: HttpClient, private router: Router) {
    this.restoreUser();
  }

  login(data: IloginUser) {
    return this.http.post<IauthResponse>(this.loginUrl, data).pipe(
      tap((data) => {
        this.authSubject.next(data);

        localStorage.setItem('user', JSON.stringify(data));
        const endDate = this.jwtHelper.getTokenExpirationDate(
          data.accessToken
        ) as Date;
        this.autoLogOut(endDate);
      })
    );
  }

  restoreUser() {
    const userSign = localStorage.getItem('user');
    if (!userSign) {
      return;
    }
    const user: IauthResponse = JSON.parse(userSign);
    if (this.jwtHelper.isTokenExpired(user.accessToken)) {
      return;
    }
    this.authSubject.next(user);
  }

  logout() {
    this.authSubject.next(null);
    localStorage.removeItem('user');
    if (this.authLogoutTimer) {
      clearTimeout(this.authLogoutTimer);
    }
  }
  autoLogOut(axpDate: Date) {
    const exit = axpDate.getTime() - new Date().getTime();
    this.authLogoutTimer = setTimeout(() => {
      this.logout();
    }, exit);
  }
}
