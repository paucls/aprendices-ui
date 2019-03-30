import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${environment.baseUrl}/posts.json`);
  }

  getOldPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${environment.baseUrl}/posts_old.json`);
  }

  getCategories() {
    return this.http.get<string[]>(`${environment.baseUrl}/categories.json`);
  }
}
