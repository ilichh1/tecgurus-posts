import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Post } from '../post';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.sass']
})
export class PostsListComponent implements OnInit {

  public allPosts: Post[];

  constructor(
    private postsService: PostsService
  ) { }

  ngOnInit() {
    this.initComponent();
  }

  public initComponent(): void {
    this.postsService.getAllPosts()
      .then(posts => {
        this.allPosts = posts;
      });
  }
}
