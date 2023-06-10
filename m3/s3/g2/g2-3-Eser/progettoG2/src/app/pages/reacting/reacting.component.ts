import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';


@Component({
  selector: 'app-reacting',
  templateUrl: './reacting.component.html',
  styleUrls: ['./reacting.component.scss']
})
export class ReactingComponent {

  form!:FormGroup;
  superPoteri:string[] = ['Super forza','Programmare in angular','usare i form array']
  debolezzaAggiunta:boolean = false;

  constructor(
    private fb:FormBuilder
  ){}


  ngOnInit(){
    this.form = this.fb.group({
      authData: this.fb.group({
        nome: ['', Validators.required],
        alterego: ['', Validators.required],
        superpotere: ['', Validators.required],
        nemico: ['', [Validators.required, Validators.maxLength(10)]],
        pianeta: ['', [Validators.required, Validators.minLength(5)]],
        debolezze: this.fb.array([null], Validators.required)
      }),
    });
  }

  addDebolezza(){
    let control = new FormControl(null);
    (this.form.controls['authData'].get('debolezze') as FormArray).push(control);
    this.debolezzaAggiunta = true;
  }

  getDebolezze(){
    return (this.form.controls['authData'].get('debolezze') as FormArray).controls;
  }

  removeWeakness(index: number){
    return (this.form.controls['authData'].get('debolezze') as FormArray).removeAt(index);
  }

  onSubmit(form: FormGroup){
    console.log("🚀 ~ file: reacting.component.ts:42 ~ ReactingComponent ~ onSubmit ~ form:", form)
  }

}

/* Il codice fornito sembra essere un componente Angular che contiene un modulo di form. Analizziamo il codice passo dopo passo per spiegarlo in dettaglio:

Il template HTML:

Il codice HTML è incluso in un tag <form> e utilizza la direttiva formGroup per associare il modulo di form al componente.
All'interno del <form>, ci sono vari campi di input racchiusi in tag <mat-form-field> che utilizzano la libreria Material Design di Angular.
Ogni campo di input ha un formControlName associato che corrisponde a una chiave nel FormGroup.
I campi di input per "nome" e "alterego" sono campi di testo semplici, mentre "superpotere", "nemico" e "pianeta" sono campi di selezione o input.
C'è anche un formArrayName chiamato "debolezze" che rappresenta un array di campi di input per le debolezze del supereroe. Ci sono anche un pulsante "Aggiungi Debolezza" per aggiungere dinamicamente nuovi campi di input per le debolezze.
Infine, c'è un pulsante "INVIA!" che è abilitato solo quando il modulo è valido.
Il componente TypeScript:

Il componente Angular è definito con il decoratore @Component e contiene un costruttore che inizializza il FormBuilder di Angular.
Viene dichiarata una variabile form di tipo FormGroup che rappresenta il modulo di form.
È presente un array di stringhe chiamato superPoteri che viene utilizzato per popolare il campo di selezione dei superpoteri nel template HTML.
Nel metodo ngOnInit(), viene inizializzato il modulo di form utilizzando il FormBuilder. Viene creato un FormGroup principale chiamato "authData" che contiene vari FormControl per i campi del form.
Alcuni dei campi del form hanno anche delle validazioni. Ad esempio, il campo "nemico" deve essere obbligatorio e avere una lunghezza massima di 10 caratteri, mentre il campo "pianeta" deve essere obbligatorio e avere una lunghezza minima di 5 caratteri.
Viene anche creato un FormArray chiamato "debolezze" inizializzato con un campo di input vuoto. Questo FormArray rappresenta l'array dinamico dei campi di input per le debolezze del supereroe.
Il metodo addDebolezza() viene utilizzato per aggiungere un nuovo controllo FormControl vuoto al FormArray delle debolezze quando il pulsante "Aggiungi Debolezza" viene cliccato.
Il metodo getDebolezze() viene utilizzato per ottenere i controlli all'interno del FormArray delle debolezze per poterli iterare nel template HTML.
Infine, il metodo onSubmit() viene chiamato quando il modulo di form viene sottomesso. Attualmente, stampa semplicemente il modulo di form nella console. */
