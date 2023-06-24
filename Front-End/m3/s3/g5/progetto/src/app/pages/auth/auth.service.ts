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
  /*Questa riga dichiara una variabile jwtHelper di tipo JwtHelperService e la inizializza 
  con una nuova istanza del servizio JwtHelperService. Il JwtHelperService fornisce metodi 
  per decodificare e controllare la validità dei token JWT.*/

  apiUrl: string = environment.url;
  registerUrl:string = this.apiUrl + '/register';
  loginUrl:string = this.apiUrl + '/login';
  userUrl:string = this.apiUrl + '/users';

  private authSubject = new BehaviorSubject<null | IAuthData>(null)
  /*  Questa riga dichiara una variabile authSubject di tipo BehaviorSubject con il tipo generico 
  null | IAuthData. Un BehaviorSubject è un tipo di oggetto osservabile che emette l'ultimo valore 
  emesso e mantiene lo stato corrente. In questo caso, la variabile authSubject emette inizialmente null.*/
  user$ = this.authSubject.asObservable();
  /*Questa riga dichiara una variabile user$ che rappresenta l'osservabile associato alla variabile 
  authSubject. L'operatore asObservable() rende l'authSubject un oggetto osservabile, consentendo agli 
  altri componenti dell'applicazione di iscriversi a esso per ricevere gli aggiornamenti.*/
  isLoggedIn$ = this.user$.pipe(map(user => Boolean(user)));
  /* Questa istruzione crea un nuovo osservabile isLoggedIn$ che è ottenuto applicando una serie di operatori 
  sull'osservabile user$. In particolare, viene utilizzato l'operatore pipe() per concatenare gli operatori e 
  la funzione map() per trasformare il valore emesso dall'osservabile user$.
  La funzione map() prende una funzione di callback che viene applicata al valore emesso dall'osservabile user$. 
  In questo caso, la funzione di callback riceve il valore user e restituisce il risultato della chiamata alla 
  funzione Boolean(user). Questa trasforma il valore user in un valore booleano, restituendo true se user non è 
  nullo e false altrimenti.
  Quindi, l'osservabile isLoggedIn$ emette true se l'utente è autenticato (il valore user non è nullo) e false 
  altrimenti. Questo può essere utilizzato per controllare lo stato di autenticazione e prendere decisioni 
  nell'applicazione in base a tale stato. */

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
