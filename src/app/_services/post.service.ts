import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {
    constructor(private http: Http) { }

    addPost(obj) {
        return this.http.post('/api/post', obj, this.jwt())
            .map((response: Response) => {
                if (response['_body'] == 'Post Submitted Successfully!') {
                    return true;
                } else {
                    return false;
                }
            });
    }

    getAll() {
        return this.http.get('/api/post', this.jwt())
            .map((response: Response) => {
                let posts = response.json();
                if (posts) {
                    return posts;
                } else {
                    return false;
                }
            });
    }

    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }

}
