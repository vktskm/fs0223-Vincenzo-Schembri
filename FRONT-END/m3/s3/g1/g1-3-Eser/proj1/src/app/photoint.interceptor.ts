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

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if(request.method === 'GET'){
      console.log('hai fatto una richiesta get');
    }

    const newReq = request.clone({
      headers: request.headers
      .append('Auth','secretId')
      .append('firma','xyz')
    })

    return next.handle(request);
  }
}
