import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { IloginUser } from 'src/app/interfaces/IloginUser';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private authSvc: AuthService,
    private modalService: NgbModal,
    private router: Router
  ) {}

  data: IloginUser = {
    email: '',
    password: '',
  };

  modalTitle: string = 'Titolo';
  modalTitleUser: string = 'User';
  modalContent: string = 'Content';
  @ViewChild('content')
  mymodal!: ElementRef;
  logSub!: Subscription;

  ngOnDestroy() {
    if (this.logSub) this.logSub.unsubscribe();
  }

  login() {
    this.logSub = this.authSvc.login(this.data).subscribe((access) => {
      this.modalTitle = `Benvenuto, `;
      this.modalTitleUser = access.user.username;
      this.modalContent = 'Sarai reindirizzato alla home in 3 secondi..';
      this.open(this.mymodal);
      setTimeout(() => this.redirectNow(), 3000);
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
