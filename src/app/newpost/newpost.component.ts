import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../_models';
import { AlertService, PostService } from '../_services';


@Component({
    styleUrls: ['./newpost.css'],
    templateUrl: './newpost.component.html'
})

export class NewPostComponent {
    loading: boolean = false;
    currentUser: User;
    model = {};

    constructor(
        private router: Router,
        private postService: PostService,
        private alertService: AlertService
    ) {

        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    newpost() {
        event.preventDefault();
        this.loading = true;
        this.postService.addPost(this.model)
            .subscribe(res => {
                if (res) {
                    this.router.navigate(['/posts']);
                }
                console.log(res)
            }, error => {
                console.log(error)
                this.alertService.error(error._body);
                this.loading = false;
            });
    }

}
