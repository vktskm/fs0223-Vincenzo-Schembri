import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, switchMap, take } from 'rxjs';
import { AuthService } from './auth.service';

//un AuthInterceptor, che è un interceptor HTTP in Angular. Un interceptor è un'interfaccia che consente di intercettare e
//modificare le richieste HTTP in arrivo o le risposte HTTP in uscita. L'AuthInterceptor in particolare viene utilizzato
//per aggiungere l'header di autorizzazione (authorization header) a ogni richiesta HTTP uscente.

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private authSrv: AuthService
  ) {}

  //La classe implementa il metodo intercept dell'interfaccia HttpInterceptor. Questo metodo viene chiamato automaticamente
  //per ogni richiesta HTTP in uscita.
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    return this.authSrv.user$.pipe(take(1), switchMap(user => {
    //viene utilizzato l'operatore pipe sull'Observable this.authSrv.user$ per applicare una serie di operatori.

    //L'operatore take(1) viene utilizzato per prendere solo il primo valore emesso dall'Observable this.authSrv.user$.
    //Questo è necessario perché l'interceptor viene eseguito per ogni richiesta HTTP, ma vogliamo ottenere solo l'ultimo
    //valore dell'utente autenticato.

    //L'operatore switchMap viene utilizzato per eseguire una nuova richiesta HTTP all'interno del flusso. Se l'utente
    //non è presente (!user), la richiesta HTTP originale viene gestita senza alcuna modifica utilizzando next.handle(request).
    console.log(user);

    //Se l'utente è presente, viene creato un clone della richiesta originale utilizzando request.clone(). Viene quindi
    //aggiunto l'header di autorizzazione (Authorization) con il token di accesso (user.accessToken)
    //utilizzando headers:request.headers.append('Authorization', 'Bearer ${user.accessToken}').
    if(!user){
      return next.handle(request)
    }
    const newReq = request.clone({
      headers:request.headers.append('Authorization',`Bearer ${user.accessToken}`)
    })
    //Infine, viene utilizzato next.handle(newReq) per inviare la richiesta modificata con l'header di autorizzazione.
    return next.handle(newReq)
    })
    );
  }
}

//In sintesi, l'AuthInterceptor intercetta ogni richiesta HTTP in uscita e aggiunge l'header di autorizzazione con il
//token di accesso dell'utente autenticato. Ciò consente di inviare richieste autenticate al server.
