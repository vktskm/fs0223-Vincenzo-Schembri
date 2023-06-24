import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IChatMsg } from 'src/app/interfaces/ichat-msg';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(private http: HttpClient) {}

  apiUrl: string =
    'https://prova-f96b8-default-rtdb.europe-west1.firebasedatabase.app/';

  uploadMessage(url: string, msg: IChatMsg[]) {
    return this.http.put<IChatMsg[]>(this.apiUrl + '/' + url + '.json', msg);
  }
}
