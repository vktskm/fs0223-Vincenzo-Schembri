import { Injectable } from '@angular/core';
import { Post } from '../Model/post';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotoPostService {

  baseUrl: string = 'http://localhost:3000/fotos';

  constructor(
    private http:HttpClient
  ) { }


  get(){
    return this.http.get<Post[]>(this.baseUrl);
  }


  delete(id?:number){
    //ricorda che l'indirizzo è composto da 'http://localhost:3000/users/'+ id dell'utente da eliminare
    return this.http.delete(this.baseUrl + '/' + id);
  }








}
