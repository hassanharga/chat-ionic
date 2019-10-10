import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url = environment.apiUrl;

  constructor(private http: HttpClient) { }
  addPost(body): Observable<any> {
    return this.http.post(`${this.url}/post/add-post`, body);
  }
  getAllPosts(): Observable<any> {
    return this.http.get(`${this.url}/posts/`);
  }
  addLike(body): Observable<any> {
    return this.http.post(`${this.url}/post/add-like`, body);
  }
  addComment(postId, comment): Observable<any> {
    return this.http.post(`${this.url}/post/add-comment`, {postId, comment});
  }
  getPost(id): Observable<any> {
    return this.http.get(`${this.url}/post/${id}`);
  }
}
