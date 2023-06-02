import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interface/post.interface';
import { PostService } from 'src/app/service/post.service';

@Component({
    selector: 'app-post-attivi',
    templateUrl: './post-attivi.component.html',
    styleUrls: ['./post-attivi.component.scss'],
})
export class PostAttiviComponent implements OnInit {
    constructor(private posts: PostService) {}

    postTotali: Post[] = this.posts.getPost();

    ngOnInit(): void {}
}
