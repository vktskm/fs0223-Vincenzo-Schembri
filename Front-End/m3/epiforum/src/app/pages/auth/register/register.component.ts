import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';
import { RegisterService } from 'src/app/service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  password: string = '';
  email: string = '';
  modalTitle: string = 'Titolo';
  modalTitleUser: string = 'User';
  modalContent: string = 'Content';
  @ViewChild('content')
  mymodal!: ElementRef;
  logSub!: Subscription;
  regSub!: Subscription;

  constructor(
    private regSvc: RegisterService,
    private loginSvc: AuthService,
    private router: Router,
    private modalService: NgbModal
  ) {}

  ngOnDestroy() {
    if (this.logSub) this.logSub.unsubscribe();
    if (this.regSub) this.regSub.unsubscribe();
  }

  submit(form: NgForm) {
    this.regSub = this.regSvc.submit(form.value).subscribe((res) => {
      console.log(res);
      const obj = {
        email: this.email,
        password: this.password,
      };
      this.logSub = this.loginSvc.login(obj).subscribe((logged) => {
        this.modalTitle = `Benvenuto, `;
        this.modalTitleUser = logged.user.username;
        this.modalContent = 'Sarai reindirizzato alla home in 3 secondi..';
        this.open(this.mymodal);
        setTimeout(() => this.redirectNow(), 3000);
      });
    });
  }

  open(content: any) {
    this.modalService.open(content);
  }

  dismiss() {
    this.modalService.dismissAll();
  }

  redirectNow() {
    this.dismiss();
    this.router.navigate(['']);
  }
}
