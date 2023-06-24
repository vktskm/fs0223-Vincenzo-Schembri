import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent {

  @ViewChild('form',{static:true}) form!:NgForm;

  submit(form: NgForm) {
    console.log(form.form.value);
    this.form.reset();
  }

  ngAfterViewInit(){

    this.form.statusChanges?.subscribe(status => {
      console.log(status);//valid | invalid
    })

  }
}
