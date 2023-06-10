import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UserInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if(request.method === 'GET'){
      console.log('hai fatto una richiesta get');

    }

    //la request originale è immutabile, procediamo quindi a clonarla, effettuando modifiche al clone stesso mentre lo creiamo
    const newReq = request.clone({
      headers: request.headers
      .append('Auth','secretId')
      .append('firma','xyz')//spiegazione: assegno agli headers del clone, gli stessi headers della richiesta originale, facendo però append di nuovi headers con i rispettivi valori
    })


    return next.handle(newReq);//attenzione, handle gestisce ora il clone della richiesta iniziale(newReq anzichè request)


  }
}
