import { Component } from '@angular/core';
import { AuthService, SignupData } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  //Viene definita una proprietà data di tipo SignupData per memorizzare i dati di registrazione. SignupData è
  //un'interfaccia definita nel servizio AuthService che specifica la struttura dei dati di registrazione,
  //come email, password, nome e cognome.
  data:SignupData = {
    email: '',
    password: '',
    name: '',
    surname: ''
  }

  //Viene definito un costruttore che inietta il servizio AuthService come dipendenza nel componente.
  constructor(private authService:AuthService){}

  //Viene definito il metodo register(), che viene chiamato quando l'utente fa clic sul pulsante di registrazione.
  //All'interno di questo metodo, viene chiamato il metodo signUp() del servizio AuthService, passando i dati di
  //registrazione (this.data).
  register(){
    this.authService.signUp(this.data)
    .subscribe(res => console.log(res.user));
    //Viene sottoscritta l'observable restituito dal metodo signUp() per ottenere la risposta dal server. Nel caso
    //di una registrazione riuscita, viene visualizzato il messaggio di log con l'utente registrato (res.user).
  }




  //In sintesi, il componente RegisterComponent è responsabile di gestire la pagina di registrazione, acquisire
  //i dati di registrazione inseriti dall'utente e invocare il servizio AuthService per effettuare la registrazione.
}
