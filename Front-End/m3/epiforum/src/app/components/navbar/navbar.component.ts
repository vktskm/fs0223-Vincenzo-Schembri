import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { IauthResponse } from 'src/app/interfaces/IauthResponse';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isLogged: boolean = false;
  username: string = '';
  loggedSub!: Subscription;

  constructor(private svc: AuthService) {
    this.checkUserLogged();
  }

  checkUserLogged() {
    this.loggedSub = this.svc.isLoggedIn$.subscribe((res) => {
      this.isLogged = res;
      res ? this.getUsername() : null;
    });
  }

  getUsername(): void {
    this.svc.user$
      .subscribe((res) => (this.username = res!.user.username))
      .unsubscribe();
  }

  checkImg():boolean{
    const userJson = localStorage.getItem("user")
    if (!userJson) {
      return false
    }else
    {
      const user:IauthResponse = JSON.parse(userJson)

     return user.user.avatar ?  true : false
    }

  }

  getImg():string{
    const userJson = localStorage.getItem("user")
    const user:IauthResponse = JSON.parse(userJson!)
    return user.user.avatar!
  }
}
