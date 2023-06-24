import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photos } from './Models/photos';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  apiUrl: string = 'https://jsonplaceholder.typicode.com/photos';

  constructor(
    private http: HttpClient
    ) { }

  getPhotos(){

    return this.http.get<Photos[]>(this.apiUrl);
  }

  deletePhotos(){

  }

}
