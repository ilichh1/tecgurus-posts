import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from '../post';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.sass']
})
export class PostDetailComponent implements OnInit, OnDestroy {

  private postId: number;
  public post: Post;
  private paramsSubscriber: Subscription;

  constructor(
    private route: ActivatedRoute,
    private service: PostsService
  ) { }

  ngOnInit() {
    this.initComponent();
  }

  ngOnDestroy() {
    this.paramsSubscriber.unsubscribe();
  }

  public initComponent(): void {
    // SUBSCRIBER
    this.paramsSubscriber = this.route.params.subscribe(params => {
      this.postId = Number(params.postId);
      this.getPost();
    });

    this.getPost();
  }

  private getPost(): void {
    this.service.getPostById(this.postId)
      .then(post => this.post = post);
  }

}
