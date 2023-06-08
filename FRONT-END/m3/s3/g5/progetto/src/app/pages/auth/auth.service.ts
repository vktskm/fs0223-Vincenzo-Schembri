import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, catchError, map, tap, throwError } from 'rxjs';
import { IAuthData } from 'src/app/interface/iauth-data';
import { ILoginData } from 'src/app/interface/ilogin-data';
import { ISignUpData } from 'src/app/interface/isign-up-data';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService{


  jwtHelper: JwtHelperService = new JwtHelperService();

  apiUrl: string = environment.url;
  registerUrl:string = this.apiUrl + '/register';
  loginUrl:string = this.apiUrl + '/login';
  userUrl:string = this.apiUrl + '/users';

  private authSubject = new BehaviorSubject<null | IAuthData>(null)
  user$ = this.authSubject.asObservable();
  isLoggedIn$ = this.user$.pipe(map(user => Boolean(user)));

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.restoreUser()//dice di inserirlo così perchè è l'unico modo per farlo partire nel momento giusto
  }

  signUp(data:ISignUpData){
    /* return this.http.post<IAuthData>(this.registerUrl,data) */
    return this.http.post<IAuthData>(this.registerUrl, data).pipe(
      catchError(error => {
        if (error.status === 400) {
          // Gestisci l'errore "Bad Request" qui
          // Puoi loggare l'errore, mostrare un messaggio all'utente, ecc.
          alert('QUI POSSO FARE QUALCOSA CON L ERRORE');
        }
        return throwError(error); // Rilancia l'errore per ulteriori gestioni
      })
    );
  }

  signIn(data:ILoginData){
    return this.http.post<IAuthData>(this.loginUrl,data)
    .pipe(tap(data =>{
      this.authSubject.next(data);
      localStorage.setItem('user', JSON.stringify(data));

      const expDate = this.jwtHelper.getTokenExpirationDate(data.accessToken) as Date;
      this.autoLogout(expDate);
    }))
    .pipe(catchError(error => {
      if (error.status === 400) {
        // Gestisci l'errore "Bad Request" qui
        // Puoi loggare l'errore, mostrare un messaggio all'utente, ecc.
        alert('QUI POSSO FARE QUALCOSA CON L ERRORE');
      }
      return throwError(error); // Rilancia l'errore per ulteriori gestioni
    }))
  }

  restoreUser(){
    const userJson = localStorage.getItem('user');
    if(!userJson){
      return
    }

    const user: IAuthData = JSON.parse(userJson);
    if(this.jwtHelper.isTokenExpired(user.accessToken)){
      return;
    }

    this.authSubject.next(user);
    console.log('sei loggato')
  }

  logout(){
    this.authSubject.next(null);
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  autoLogTimer: any;
  autoLogout(expDate:Date){
    const expMs = expDate.getTime() - new Date().getTime()
    this.autoLogTimer = setTimeout(() => {
      this.logout();
    }, expMs)
  }
}
