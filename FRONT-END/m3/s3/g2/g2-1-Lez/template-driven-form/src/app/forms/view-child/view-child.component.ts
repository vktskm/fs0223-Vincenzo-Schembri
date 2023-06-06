import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.scss']
})
export class ViewChildComponent {

  @ViewChild('f',{static:true}) form!:NgForm;

  generi:string[] = ['uomo','donna','altro'];//dati che uso solo per costruire una parte del form


  setDati(){

    let datiDaInserire = {
      authData:{
        email:'miamail@esempio.it',
        password:'password'
      },
      cap:42124
    }

    this.form.form.patchValue(datiDaInserire);

  }

  submit(form:NgForm) {
    console.log(form);
    console.log(form.form.value);//qui ci sono tutti i valori sotto forma di oggetto unico

    this.form.reset();
  }

  ngOnInit(){

    this.form.statusChanges?.subscribe(status => {

      console.log(status);//valid | invalid


    })

  }

}
