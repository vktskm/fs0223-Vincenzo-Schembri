import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  selectedChannel: string = 'chat';
  refreshing: boolean = false;
  islogged: boolean = false;
  loggedSub!: Subscription;

  constructor(private svc: AuthService) {}

  ngOnInit() {
    this.svc.isLoggedIn$.subscribe((res) => {
      this.islogged = res;
    });
  }

  ngOnDestroy() {
    if (this.loggedSub) this.loggedSub.unsubscribe();
  }

  switchChannel(chat: string) {
    this.refreshing = true;
    this.selectedChannel = chat;
    setTimeout(() => {
      this.refreshing = false;
    }, 500);
  }
}
