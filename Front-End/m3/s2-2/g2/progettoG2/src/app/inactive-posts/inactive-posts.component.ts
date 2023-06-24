import { IObj } from './../posts.service';
import { PostsService } from './../posts.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrls: ['./inactive-posts.component.scss']
})

export class InactivePostsComponent {
  objects:IObj[] = [];
  constructor(private objSvc: PostsService){
    objSvc.apiRead()
    .then(objects => this.objects = objects);
  }
}
