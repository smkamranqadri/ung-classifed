import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../_models/index';
import { AlertService, PostService } from '../_services/index';


@Component({
    styleUrls: ['./posts.css'],
    templateUrl: './posts.component.html'
})

export class PostsComponent implements OnInit {
    currentUser: User;
    posts: any;

    constructor(
        private router: Router,
        private postService: PostService,
        private alertService: AlertService
    ) {

        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadPosts();
    }

    private loadPosts() {
        this.postService.getAll()
            .subscribe(posts => {
                this.posts = posts;
            }, error => {
                this.alertService.error(error._body);
            });

    }

}
