import { Component, ViewChild, OnInit } from '@angular/core';


@Component({
    selector: 'app-td',
    templateUrl: './td.component.html',
    styleUrls: ['./td.component.scss'],
})
export class DrivenFormComponent implements OnInit {
    title = 'driven-form';
    stampa: boolean = false;
    lunghezzaNemico: [] = [];
    lunghezzaPianeta: [] = [];
    lunghezzaMinima= 5;
    lunghezzaMassima= 10;

    @ViewChild('form', { static: true }) form!: NgForm;
    userForm = {
        defUserName: '',
        alterEgo: '',
        power: '',
        nemico: '',
        pianeta: '',
        debolezza: '',
    };

    user: any = {
        name: '',
        alterEgo: '',
        power: '',
        nemico: '',
        pianeta: '',
        debolezza: '',
    };

    //userName: new FormControl('', Validators.minLength(5))

    ngOnInit(): void {
        this.form.statusChanges?.subscribe((status) => {
            console.log('Stato del form: ', status);
        });
    }

    submit() {
        console.log('Form inviato: ', this.form);
        this.stampa = true;
        this.user.name = this.form.value.userInfo.name;
        this.user.alterEgo = this.form.value.userInfo.alterEgo;
        this.user.power = this.form.value.userInfo.power;
        this.user.nemico = this.form.value.userInfo.nemico;
        this.user.pianeta = this.form.value.userInfo.pianeta;
        this.user.debolezza = this.form.value.userInfo.debolezza;

        this.form.reset();
    }
}
