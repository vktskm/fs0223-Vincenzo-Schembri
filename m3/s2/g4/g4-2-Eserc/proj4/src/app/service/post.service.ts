import { Injectable } from '@angular/core';
import { Post } from '../interface/post.interface';

@Injectable({
    providedIn: 'root',
})
export class PostService {
    constructor() {}

    posts: Post[] = [
        {
            id: 1,
            body: 'Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.',
            title: 'Dolor velit sint tempor',
            active: true,
            type: 'news',
            author: 'Leanne Graham',
        },
        {
            id: 2,
            body: 'Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.',
            title: 'Dolor velit sint tempor',
            active: true,
            type: 'politics',
            author: 'Ervin Howell',
        },
        {
            id: 3,
            body: 'Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.',
            title: 'Dolor velit sint tempor',
            active: true,
            type: 'education',
            author: 'Clementine Bauch',
        },
        {
            id: 4,
            body: 'Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.',
            title: 'Dolor velit sint tempor',
            active: false,
            type: 'news',
            author: 'Patricia Lebsack',
        },
        {
            id: 5,
            body: 'Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.',
            title: 'Dolor velit sint tempor',
            active: false,
            type: 'politics',
            author: 'Chelsey Dietrich',
        },
    ];

    getPost() {
        return this.posts;
    }
}
