import { PostService } from './../post.service';
import { Component } from '@angular/core';
import { Post } from '../Model/post';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.scss']
})
export class ActiveComponent {
  arrayPost:Post[]=[]

  constructor( private PostService: PostService){
        this.PostService.getPost().then((res)=>this.arrayPost=res)
  }

}
