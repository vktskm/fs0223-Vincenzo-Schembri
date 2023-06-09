import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from './interface/photo';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }
}

export class PhotoService {
  apiUrl: string = 'http://localhst:3000/endpoint';

  constructor(
    private http:HttpClient) {}

  get(){
    return this.http.get<Photo[]>(this.apiUrl);
  }
  post(photo:Photo){
    return this.http.post<Photo>(this.apiUrl, photo);
  }
  put(photo:Photo){
    return this.http.put<Photo>(this.apiUrl + '/' + photo.id, photo);
  }
  delete(id:number){
    return this.http.delete(this.apiUrl + '/' + id);
  }


}




