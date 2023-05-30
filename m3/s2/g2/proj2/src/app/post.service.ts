import { Injectable } from '@angular/core';
import { Post } from './Model/post';

@Injectable({
  providedIn: 'root'
})


export class PostService {

  constructor() {
  }

  getPost(){
    return fetch("../assets/db.json")
      .then((res)=>res.json())
  }
}


