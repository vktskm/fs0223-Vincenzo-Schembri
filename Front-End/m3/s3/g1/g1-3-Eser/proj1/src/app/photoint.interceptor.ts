import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PhotointInterceptor implements HttpInterceptor {

  constructor() {}

  /* Gli interceptor HTTP sono utilizzati per intercettare le richieste HTTP in uscita
   e in ingresso per effettuare delle operazioni aggiuntive come l'aggiunta di header,
   la gestione degli errori, la modifica dei dati, ecc.*/

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    /* Questa funzione intercept accetta due parametri: l'oggetto request che rappresenta la
    richiesta HTTP originale e l'oggetto next che è un'istanza della classe HttpHandler.
    */
    if(request.method === 'GET'){
      console.log('hai fatto una richiesta get');
    }

    const newReq = request.clone({
      headers: request.headers
      .append('Auth','secretId')
      .append('firma','xyz')
    })

    return next.handle(request);//return next.handle(newReq);
  }

}
