import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostsHomeComponent } from './posts-home/posts-home.component';

const postRoutes: Routes = [
  { path: 'detail/:postId', component: PostDetailComponent },
  { path: 'list', component: PostsListComponent },
  { path: '', component: PostsHomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild( postRoutes )
  ],
  exports: [
    RouterModule
  ]
})
export class PostsRoutingModule { }
