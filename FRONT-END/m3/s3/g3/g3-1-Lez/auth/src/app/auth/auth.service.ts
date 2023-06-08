import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map, tap } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

export interface SignupData{
  email: string;
  password: string;
  name: string;
  surname:string;
}

export interface UserData{
  id: string;
  email: string;
  name: string;
  surname:string;
}

export interface AuthData{
    accessToken: string;
    user: UserData;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtHelper:JwtHelperService = new JwtHelperService();//ci permette di lavorare facilmente con il jwt

  apiUrl:string = 'http://localhost:3000'
  registerUrl:string = this.apiUrl+'/register';
  loginUrl:string = this.apiUrl+'/login';
  userUrl:string = this.apiUrl+'/users';

  private authSubject = new BehaviorSubject<null | AuthData>(null)//null è il valore di default, quindi si parte con utente non loggato
  user$ = this.authSubject.asObservable(); //contiene dati sull'utente se è loggato
  isLoggedIn$ = this.user$.pipe(map(user => !!user));//serve per la verifica, capta la presenza(o meno) dello user e mi restituisce un bool (false se il subject riceve null)

  autoLogTimer:any;//riferimento al timer che slogga l'utente quando il jwt è scaduto

  constructor(
    private http: HttpClient,//per le chiamate http
    private router: Router//per i redirect
  ) {

    this.restoreUser();

   }


  login(data:{email:string, password:string}){
    return this.http.post<AuthData>(this.loginUrl,data).pipe(tap(data => {

      this.authSubject.next(data);//invio lo user al subject
      localStorage.setItem('user', JSON.stringify(data));//salvo lo user per poterlo recuperare se si ricarica la pagina

      //salvo la data di scadenza del token
      const expDate = this.jwtHelper.getTokenExpirationDate(data.accessToken) as Date
      this.autoLogout(expDate);//un metodo per il logout automatico

    }))
  }

  logout(){
    this.authSubject.next(null);
    localStorage.removeItem('user');
    this.router.navigate(['/login'])//redirect al login
  }

  autoLogout(expDate:Date){
    const expMs = expDate.getTime() - new Date().getTime()
    this.autoLogTimer = setTimeout(() =>{
      this.logout()
    }, expMs)
  }

  signUp(data:SignupData){
    return this.http.post<AuthData>(this.registerUrl,data)
  }

  restoreUser(){
    const userJson = localStorage.getItem('user')
    if(!userJson){
      return
    }

    const user:AuthData = JSON.parse(userJson);
    if(this.jwtHelper.isTokenExpired(user.accessToken)){
      return;
    }

    this.authSubject.next(user)
  }


}
