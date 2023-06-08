import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, map, tap } from 'rxjs';

//Vengono definiti tre tipi di interfaccia: SignupData per i dati di registrazione, UserData per i dati dell'utente e AuthData
//per i dati di autenticazione che includono l'access token e i dati dell'utente.
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
  //npm install @auth0/angular-jwt
  //altrimenti non è importabile
  jwtHelper:JwtHelperService = new JwtHelperService();//ci permette di lavorare facilmente con il jwt
  //Vengono definiti anche URL per le richieste di registrazione, accesso e utenti.
  apiUrl:string = 'http://localhost:3000';
  registerUrl:string = this.apiUrl+'/register';
  loginUrl:string = this.apiUrl+'/login';
  userUrl:string = this.apiUrl+'/users';

  //Viene definito un oggetto authSubject di tipo BehaviorSubject che tiene traccia dello stato di autenticazione
  //dell'utente. Viene inizializzato con il valore null che indica che l'utente non è loggato. Viene anche creato
  //un observable user$ che emette i dati dell'utente corrente.
  private authSubject = new BehaviorSubject<null | AuthData>(null) //**N.B. A fine pagina c'è la spiegazione di BehaviorSubject

  user$ = this.authSubject.asObservable();//contiene dati sull'utente se è loggato

  isLoggedIn$ = this.user$.pipe(map(user => !!user));//serve per la verifica, capta la presenza(o meno) dello
  //user e mi restituisce un bool (false se il subject riceve null)
/*l'operatore map viene utilizzato per trasformare il flusso di valori emessi dall'Observable this.user$. In particolare, viene
  applicata una funzione di trasformazione a ciascun valore emesso, che nel caso specifico è la funzione user => !!user.

  La funzione user => !!user viene utilizzata per convertire il valore dell'utente (user) in un valore booleano.
  L'operatore !! viene utilizzato per convertire il valore iniziale in un valore booleano. In pratica, se user è un valore diverso
  da null o undefined, il risultato sarà true; altrimenti, il risultato sarà false.

  Quindi, l'operatore map trasforma il flusso di valori emessi dall'Observable this.user$ in un flusso di valori booleani,
  indicando se l'utente è autenticato o meno. Questo viene assegnato alla variabile isLoggedIn$, che può essere utilizzata per
  verificare lo stato di autenticazione dell'utente in altre parti del codice. */


  autoLogTimer:any;//riferimento al timer che slogga l'utente quando il jwt è scaduto

  constructor(
    private http: HttpClient,//per le chiamate http
    private router: Router//per i redirect
  ) {
    this.restoreUser();
   }

  //Viene definito il metodo login(data) per effettuare la richiesta di accesso. Viene eseguita una richiesta POST
  //all'URL di accesso (loginUrl) con i dati di accesso dell'utente. Il risultato viene memorizzato nel authSubject
  //e salvato nel localStorage. Viene anche impostato un timer per eseguire automaticamente il logout quando il
  //token di accesso scade.
  login(data:{email:string, password:string}){
    return this.http.post<AuthData>(this.loginUrl,data).pipe(tap(data => {
      this.authSubject.next(data);//invio lo user al subject
      localStorage.setItem('user', JSON.stringify(data));//salvo lo user per poterlo recuperare se si ricarica la pagina

      //salvo la data di scadenza del token
      const expDate = this.jwtHelper.getTokenExpirationDate(data.accessToken) as Date
      this.autoLogout(expDate);//un metodo per il logout automatico
    }))
    //N.B.
/*
    tap è un operatore di RxJS che consente di eseguire azioni laterali o effettuare modifiche senza alterare i dati
    che attraversano lo stream di un Observable. Viene utilizzato per l'esecuzione di effetti collaterali, come la modifica
    di variabili di stato o l'invio di dati ad altri servizi.

    In questo specifico caso, l'operatore tap viene utilizzato per eseguire alcune azioni dopo aver ricevuto la risposta dalla
    richiesta di accesso (this.http.post<AuthData>(this.loginUrl, data)). Ecco cosa viene fatto all'interno del blocco tap:

    this.authSubject.next(data): Viene emesso il valore data (che contiene i dati di autenticazione, inclusi l'access token e i
    dati dell'utente) all'interno dell'oggetto authSubject. Ciò significa che tutti gli osservatori che si sono sottoscritti a
    authSubject riceveranno questo valore e potranno reagire di conseguenza.

    localStorage.setItem('user', JSON.stringify(data)): I dati di autenticazione (data) vengono salvati nel localStorage utilizzando
    la chiave 'user'. Questo consente di conservare i dati dell'utente anche se la pagina viene ricaricata, in modo che l'utente
    rimanga autenticato anche dopo un refresh.

    const expDate = this.jwtHelper.getTokenExpirationDate(data.accessToken) as Date: Viene ottenuta la data di scadenza del token
    di accesso (accessToken) utilizzando il JwtHelperService e viene assegnata alla variabile expDate.

    this.autoLogout(expDate): Viene chiamato il metodo autoLogout passando la data di scadenza (expDate) come argomento. Questo
    metodo gestisce il logout automatico dell'utente in base alla data di scadenza del token di accesso.
     */
  }

  //Viene definito il metodo logout() per eseguire il logout dell'utente. Viene svuotato l'authSubject, rimossa la
  //memorizzazione locale dell'utente e viene effettuato un reindirizzamento alla pagina di accesso.
  logout(){
    this.authSubject.next(null);
    localStorage.removeItem('user');
    this.router.navigate(['/login'])//redirect al login
  }

  //Viene definito il metodo autoLogout(expDate: Date) per eseguire automaticamente il logout quando il token di
  //accesso scade. Viene calcolato il tempo rimanente prima della scadenza del token e viene impostato un timer per
  //eseguire il logout.
  autoLogout(expDate:Date){
    const expMs = expDate.getTime() - new Date().getTime()
    this.autoLogTimer = setTimeout(() =>{
      this.logout()
    }, expMs)
  }

  //Viene definito il metodo signUp(data: SignupData) per effettuare la richiesta di registrazione. Viene eseguita
  //una richiesta POST all'URL di registrazione (registerUrl) con i dati di registrazione dell'utente.
  signUp(data:SignupData){
    return this.http.post<AuthData>(this.registerUrl,data)
  }

  //Viene definito il metodo restoreUser() che viene chiamato nel costruttore del servizio. Recupera i dati dell'utente
  //dal localStorage, controlla se il token di accesso è scaduto utilizzando il JwtHelperService e imposta l'authSubject
  //con i dati dell'utente corrente se il token non è scaduto.
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


  //In sintesi, il AuthService gestisce l'autenticazione degli utenti, inclusi i metodi per l'accesso, il logout, la
  //registrazione e il ripristino dello stato di autenticazione. Viene anche fornito un observable per osservare i dati
  //dell'utente corrente e verificare se l'utente è loggato.
}


/*
Un BehaviorSubject è un tipo di oggetto Observable in RxJS che mantiene l'ultimo valore emesso e lo rende disponibile
immediatamente ai nuovi osservatori che si sottoscrivono ad esso.

A differenza di un Subject normale, che inizia senza un valore iniziale e inizia a emettere valori solo dopo che un osservatore
si è sottoscritto ad esso, un BehaviorSubject richiede un valore iniziale durante la sua creazione. Questo valore iniziale viene
emesso immediatamente a tutti gli osservatori che si sottoscrivono, anche se si sottoscrivono in un momento successivo.

Caratteristiche chiave di un BehaviorSubject:

Mantiene l'ultimo valore emesso: Un BehaviorSubject tiene traccia dell'ultimo valore emesso. Quando un nuovo osservatore si
sottoscrive, riceve immediatamente l'ultimo valore emesso, consentendo loro di avere accesso allo stato corrente.

Emissione iniziale: Un BehaviorSubject emette immediatamente il valore iniziale a tutti gli osservatori al momento della sottoscrizione,
anche se si sottoscrivono dopo che il valore è stato emesso.

Osservazione continua: Gli osservatori ricevono tutti i valori emessi dal BehaviorSubject dopo la loro sottoscrizione, compresi i nuovi
valori emessi in seguito.

Nel contesto dell'autenticazione, authSubject, come un BehaviorSubject, consente di mantenere lo stato di autenticazione corrente
dell'utente. Gli altri componenti o servizi possono sottoscriversi a authSubject per ottenere informazioni sull'utente autenticato e
reagire ai cambiamenti di stato di autenticazione.
 */



