import { Injectable } from '@angular/core';
import { Post } from './Models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  post: Post[]=[
    {
      "id":1,
      "title":"Lorem ipsum1",
      "type": "news",
      "active":true
    },
    {
      "id":2,
      "title":"Lorem ipsum2",
      "type": "politic",
      "active":false
    },
    {
      "id":3,
      "title":"Lorem ipsum3",
      "type": "politic",
      "active":false
    },
    {
      "id":4,
      "title":"Lorem ipsum4",
      "type": "education",
      "active":true
    }
  ]


  getPost(){
    return this.post;
  }

}
