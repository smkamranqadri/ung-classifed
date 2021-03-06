﻿import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService } from '../_services/index';

@Component({
    templateUrl: './register.component.html'
})

export class RegisterComponent {
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private alertService: AlertService) { }

    register() {
        this.loading = true;
        this.model.role = 'User';
        // this.userService.create(this.model)
        //     .subscribe(
        //         data => {
        //             this.alertService.success('Registration successful', true);
        //             this.router.navigate(['/login']);
        //         },
        //         error => {
        //             this.alertService.error(error._body);
        //             this.loading = false;
        //         });
    }
}
