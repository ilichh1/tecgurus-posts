import { Injectable } from '@angular/core';
import { Post } from './post';
import { HttpService } from '../http.service';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private http: HttpService
  ) { }

  public getAllPosts(): Promise<Post[]> {
    return this.http.get('posts')
      .then(response => {
        return response;
      });
  }

  public getPostById(id: number): Promise<Post> {
    return this.http.get(`posts/${id}`);
  }

}
