import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ipizza } from './ipizza';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  apiUrl = environment.apiPizze

  constructor(

    private http:HttpClient

  ) { }


  getAll(){
    return this.http.get<Ipizza[]>(this.apiUrl);
  }

  getById(id:number){
    return this.http.get<Ipizza>(`${this.apiUrl}/${id}`);
  }

  post(data:Partial<Ipizza>){
    return this.http.post<Ipizza>(`${this.apiUrl}`,data);
  }

  put(data:Partial<Ipizza>){
    return this.http.put<Ipizza>(`${this.apiUrl}/${data.id}`,data);
  }

  delete(id:number){
    return this.http.delete<Ipizza>(`${this.apiUrl}/${id}`);
  }



}
