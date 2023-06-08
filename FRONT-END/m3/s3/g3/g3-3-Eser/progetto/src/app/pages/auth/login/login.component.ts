import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
// il componente LoginComponent, è responsabile della gestione del processo di accesso (login) dell'utente nell'applicazione

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent {

  //La classe LoginComponent contiene una proprietà data che rappresenta le credenziali dell'utente per l'accesso, ovvero
  //l'email e la password. Inizialmente, le proprietà sono vuote.
  data:{email:string, password:string} = {
    email: '',
    password: '',
  }

  constructor(
    private authService:AuthService
  ){}

  //Il metodo login() verrà chiamato quando l'utente preme il pulsante di accesso nell'interfaccia utente.
  login(){
    this.authService.login(this.data)
    //viene chiamato il metodo login() del servizio AuthService, passando le credenziali (this.data)
    //come parametro. Questo avvia la richiesta di accesso al server.
    .subscribe(data =>{
      //Il metodo login() restituisce un Observable, a cui viene chiamato il metodo subscribe().
      //Quando la richiesta di accesso viene completata, viene eseguito il callback di subscribe().
      alert('Sei loggato')
      console.log(data);
    })
  }
}
