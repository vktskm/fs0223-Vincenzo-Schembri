import { Component } from '@angular/core';
import { Post } from 'src/app/Models/post';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrls: ['./active-posts.component.scss']
})
export class ActivePostsComponent {

  postArray: Post[] = [];

  constructor(private postSvc:PostService){

    this.postSvc.getPosts().then(post => {
      //una volta ricevuti i post dal server, vado a filtrare, ottenendo un array contenente i soli post con la proprietà active == true
      let postFiltrati = post.filter(p => p.active);

      this.postArray = postFiltrati
    })

  }



}
