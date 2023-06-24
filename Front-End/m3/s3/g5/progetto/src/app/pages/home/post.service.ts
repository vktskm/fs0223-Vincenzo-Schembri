import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Ipost } from './ipost';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  apiUrl = environment.apiPost;

  constructor(
    private http:HttpClient
  ) { }

  getAll(){
    return this.http.get<Ipost[]>(this.apiUrl)
  }

  getById(id:number){
    return this.http.get<Ipost>(`${this.apiUrl}/${id}`);
  }

  post(data:Partial<Ipost>){
    return this.http.post<Ipost>(`${this.apiUrl}`,data);
  }

  put(data:Partial<Ipost>){
    return this.http.put<Ipost>(`${this.apiUrl}/${data.id}`,data);
  }

  delete(id:number){
    return this.http.delete<Ipost>(`${this.apiUrl}/${id}`);
  }


}
