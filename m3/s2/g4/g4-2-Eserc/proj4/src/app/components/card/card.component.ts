import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interface/post.interface';
import { PostService } from 'src/app/service/post.service';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

    constructor(private posts: PostService) {}

    postTotali: Post[] = this.posts.getPost();

    ngOnInit(): void {}
}
