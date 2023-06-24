import { IObj } from './../posts.service';
import { PostsService } from './../posts.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrls: ['./active-posts.component.scss']
})
export class ActivePostsComponent {
  objects:IObj[] = [];
  constructor(private objSvc: PostsService){
    objSvc.apiRead()
    .then(objects => this.objects = objects);
  }
}
