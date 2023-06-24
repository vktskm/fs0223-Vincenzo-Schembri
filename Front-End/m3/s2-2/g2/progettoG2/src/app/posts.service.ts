import { Injectable } from '@angular/core';

export interface IObj {
  id:number;
  body:string;
  title:string;
  active:boolean;
}

@Injectable({
  providedIn: 'root'
})
export class PostsService{
  apiLink:string = '../assets/db.json';
  constructor() {
  }

  async apiRead(): Promise<IObj[]>{
    const Response = await fetch(this.apiLink);
    return await Response.json();
  }
}
