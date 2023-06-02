import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interface/post.interface';
import { PostService } from 'src/app/service/post.service';

@Component({
    selector: 'app-post-non-attivi',
    templateUrl: './post-non-attivi.component.html',
    styleUrls: ['./post-non-attivi.component.scss'],
})
export class PostNonAttiviComponent implements OnInit {

    constructor(private posts: PostService) {}

    postTotali: Post[] = this.posts.getPost();

    ngOnInit(): void {}
}
