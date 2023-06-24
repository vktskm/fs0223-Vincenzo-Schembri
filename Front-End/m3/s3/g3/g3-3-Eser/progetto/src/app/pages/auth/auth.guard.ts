import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable, map } from 'rxjs';
//definisce un AuthGuard, che è un guardiano di rotta in Angular. Un guardiano di rotta è una classe che implementa
//l'interfaccia CanActivate o CanActivateChild e viene utilizzata per proteggere le rotte dell'applicazione,
//controllando se un utente ha i permessi necessari per accedere a una determinata rotta.

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  //Il costruttore del AuthGuard riceve le dipendenze del Router e del servizio AuthService. Queste dipendenze verranno utilizzate per
  //gestire la navigazione e verificare lo stato di autenticazione dell'utente.
  constructor(
    private router: Router,
    private authService: AuthService
  ){}
  //La classe implementa i metodi canActivate e canActivateChild definiti dalle interfacce CanActivate e CanActivateChild. Questi
  //metodi vengono chiamati quando si tenta di navigare a una rotta protetta.

  //Nel metodo canActivate, viene restituito un Observable che emette un valore booleano. Questo Observable viene ottenuto chiamando
  //isLoggedIn$ del servizio AuthService, che rappresenta lo stato di autenticazione dell'utente. L'operatore map viene utilizzato
  //per trasformare il valore emesso in una nuova logica.
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      return this.authService.isLoggedIn$.pipe(map(isLoggedIn => {
      //All'interno della funzione di trasformazione map, viene verificato se l'utente è autenticato (isLoggedIn). Se l'utente
      //non è autenticato, viene reindirizzato alla pagina di accesso (this.router.navigate(['/auth/login'])). Viene restituito il
      //valore di isLoggedIn.
        if(!isLoggedIn) {
          this.router.navigate(['/auth/login']);
        }
        return isLoggedIn
      }))
  }

  //Il metodo canActivateChild viene implementato delegando alla logica di canActivate. In pratica, utilizza la stessa logica del
  //metodo canActivate per controllare l'autenticazione dell'utente quando si tenta di accedere ai figli di una rotta.
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.canActivate(childRoute, state);
  }
}

//In sintesi, il AuthGuard controlla se l'utente è autenticato prima di consentire l'accesso a una rotta o ai suoi figli. Se l'utente
//non è autenticato, viene reindirizzato alla pagina di accesso.
