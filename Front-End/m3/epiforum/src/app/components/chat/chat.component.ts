import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { IauthResponse } from 'src/app/interfaces/IauthResponse';
import { IChatMsg } from 'src/app/interfaces/ichat-msg';
import { ChatService } from 'src/app/service/chat.service';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent {
  messaggi: IChatMsg[] = [];
  @Input() chat!: string;
  @ViewChild('chatContainer') chatCont!: ElementRef;
  chatName: string = 'Generale';
  myMessage: string = '';
  chatSub!: Subscription;
  username!: string;

  constructor(private svc: ChatService) {}

  ngOnInit() {
    this.getChannelName();
    this.getUsername();
    const worker = new Worker('assets/worker.js');
    // worker.postMessage(
    //   `https://prova-f96b8-default-rtdb.europe-west1.firebasedatabase.app/${this.chat}.json`
    // );
    worker.onmessage = (event) => {
      const data = event.data;

      if (data.error) {
        console.error(data.error);
      } else {
        if (this.messaggi.length != data.length) {
          this.messaggi = data;
          setTimeout(() => {
            this.chatCont.nativeElement.scrollTop =
              this.chatCont.nativeElement.scrollHeight;
          }, 500);
        }
      }
    };
  }

  isImage(str: string): boolean {
    return (
      str.endsWith('.png') ||
      str.endsWith('.jpg') ||
      str.endsWith('.jpeg') ||
      str.endsWith('.gif') ||
      str.startsWith('http')
    );
  }

  ngOnDestroy() {
    if (this.chatSub) this.chatSub.unsubscribe();
  }

  getUsername(): void {
    if (localStorage.getItem('user')) {
      let obj: IauthResponse = JSON.parse(localStorage.getItem('user')!);
      this.username = obj.user.username;
    }
  }

  getChannelName(): void {
    switch (this.chat) {
      case 'chat':
        this.chatName = 'Generale';
        break;
      case 'chat-2':
        this.chatName = 'Teaching Assistant';
        break;
      case 'chat-3':
        this.chatName = 'this.Gusto';
        break;
      case 'chat-4':
        this.chatName = 'this.Prezzo';
        break;
      case 'chat-5':
        this.chatName = 'Meme';
        break;
    }
  }

  sendMessage(): void {
    let obj: IChatMsg = {
      sender: this.username,
      content: this.myMessage,
      date: new Date(),
    };
    let newArr: IChatMsg[] = this.messaggi;
    newArr.push(obj);
    this.chatSub = this.svc
      .uploadMessage(this.chat, newArr)
      .subscribe((res) => {
        this.messaggi = res;
        this.myMessage = '';
        setTimeout(() => {
          this.chatCont.nativeElement.scrollTop =
            this.chatCont.nativeElement.scrollHeight;
        }, 200);
      });
  }
}
