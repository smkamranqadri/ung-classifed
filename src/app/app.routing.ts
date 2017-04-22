import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewPostComponent } from './newpost';
import { PostsComponent } from './posts';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';

const appRoutes: Routes = [
    { path: 'posts', component: PostsComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'newpost', component: NewPostComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: 'login' }
];

export const RoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);
