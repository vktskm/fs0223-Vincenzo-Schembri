import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  template: `
    <div class="container">
      <h2>Reactive from hero</h2>
      <div class="row">
        <div class="col">
          <form [formGroup]="form" (ngSubmit)="submit()">
            <div class="form-group">
              <label for="name">Nome</label>
              <input
                id="name"
                required
                formControlName="name"
                class="form-control"
                type="text"
              />
              <div
                *ngIf="
                  getFormControl('name').invalid &&
                  getFormControl('name').touched
                "
                class="alert alert-danger mt-1"
                role="alert"
              >
                Campo obbligatorio
              </div>
            </div>
            <div class="form-group">
              <label for="alterEgo">Alter Ego</label>
              <input
                id="alterEgo"
                required
                formControlName="alterEgo"
                class="form-control"
                type="text"
              />
              <div
                *ngIf="
                  getFormControl('alterEgo').invalid &&
                  getFormControl('alterEgo').touched
                "
                class="alert alert-danger mt-1"
                role="alert"
              >
                Campo obbligatorio
              </div>
            </div>
            <div formArrayName="powers" class="form-group">
              <label for="powers">Super Potere</label>
              <button type="button" (click)="addPower()" class="btn btn-primary">Aggiungi potere</button>
              <div *ngFor="let c of getFormArray('powers');let i = index" class="form-group">
                <input type="text" [formControlName]="i" class="form-control">
              </div>
            </div>
            <div class="form-group">
              <label for="enemy">Nemico</label>
              <input
                id="enemy"
                maxlength="10"
                formControlName="enemy"
               
                class="form-control"
                type="text"
              />
            </div>
            <div class="form-group">
              <label for="planet">Pianeta</label>
              <input
                id="planet"
                required
                minlength="5"
                formControlName="planet"
                class="form-control"
                type="text"
              />
              <div
                *ngIf="getFormControl('planet').errors && getFormControl('planet').touched"
                class="alert alert-danger mt-1"
                role="alert"
              >
                <span *ngIf="getErrorControl('planet','required')"> Campo obbligatorio </span>
                <span *ngIf="getErrorControl('planet','minlength')">
                  Campo
                  {{
                    getErrorControl('planet','minlength').actualLength == 1
                      ? getErrorControl('planet','minlength').actualLength + ' carattere'
                      : getErrorControl('planet','minlength').actualLength + ' caratteri'
                  }}, deve essere minimo
                  {{ getErrorControl('planet','minlength').requiredLength }} caratteri
                </span>
              </div>
            </div>
            <div formArrayName="weakness" class="form-group">
              <label for="weakness">Debolezza</label>
              <button type="button" (click)="addWeakness()" class="btn btn-primary">Aggiungi debolezza</button>
              <div *ngFor="let c of getFormArray('weakness');let i = index" class="form-group">
                <input type="text" [formControlName]="i" class="form-control">
              </div>
            </div>
            <div class="row">
              <div class="col d-grid gap-2">
                <button
                  type="submit"
                  [disabled]="form.invalid"
                  class="btn btn-primary mt-4"
                >
                  Crea
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class ReactiveFormComponent implements OnInit {
  form!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [],
      alterEgo: [],
      powers: this.fb.array([]),
      enemy: [],
      planet: [],
      weakness: this.fb.array([]),
    });
  }
  getErrorControl(name: string, error: string) {
    return this.form.get(name)?.errors![error];
  }

  getFormControl(name: string) {
    return this.form.get(name) as AbstractControl;
  }

  addPower() {
    const newControl = new FormControl(null);
    (this.form.get('powers') as FormArray).push(newControl);
  }

  getFormArray(name:string){
    return (this.form.get(name) as FormArray).controls
  }
  addWeakness() {
    const newControl = new FormControl(null);
    (this.form.get('weakness') as FormArray).push(newControl);
  }


  submit() {
    console.log(this.form.value);
  }
}
