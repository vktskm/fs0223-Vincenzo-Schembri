import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {

  generi:string[] = ['uomo','donna','scegli']

  form!:FormGroup;

  constructor(
    private fb:FormBuilder
  ){}

    ngOnInit(){

      this.form = this.fb.group({//<form>
                        authData: this.fb.group({
                            email: this.fb.control('qualcosa@pippo.it',[Validators.required, Validators.email, this.emailProibiteValidator], this.emailEsistente),
                            password: this.fb.control(null),
                        }),
                        genere: this.fb.control('uomo'),
                        sports: this.fb.array([])
                  })

      this.form.statusChanges.subscribe(status => console.log(status))
      this.form.valueChanges.subscribe(value => console.log(value))


    }

    addSport(){
      let control = new FormControl(null);
      (this.form.get('sports') as FormArray).push(control);
    }

    getSports(){
      return (this.form.get('sports') as FormArray).controls
    }

    emailProibite:string[] = ['Mario@gmail.com','Mirko@gmail.com'];

    emailProibiteValidator = (formC:FormControl): ValidationErrors | null => {

      if(this.emailProibite.includes(formC.value)){
        return {
          invalid:true,
          message:'Nome Utente',
        }
      }

      return null;//tutto ok
    }


    isValid(name:string){
      return this.form.get(name)?.invalid
    }

    emailEsistente(formC:AbstractControl){
      return new Promise<ValidationErrors | null>((resolve, reject) => {

        setTimeout(() => {

          if(formC.value == 'prova@test.it'){
            resolve({emailProibita:true})
          }else{
            reject(null)
          }

        }, 2000)
      })
    }




}
