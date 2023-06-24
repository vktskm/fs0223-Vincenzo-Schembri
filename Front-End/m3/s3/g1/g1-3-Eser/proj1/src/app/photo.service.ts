import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from './Module/photo';
import { Observable, Observer, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  apiUrl: string = 'http://localhost:3000/endpoint';

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

  mySubject = new Subject<number>();
  mySubjectControl = new Subject<boolean>();
}
