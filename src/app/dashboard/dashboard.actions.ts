import { Action } from '@ngrx/store';
import { Post } from './post.model';

export enum DashboardActionTypes {
  LoadPosts = '[Dashboard] Load Posts',
  LoadPostsSuccess = '[Dashboard] Load Posts Success',
}

export class LoadPosts implements Action {
  readonly type = DashboardActionTypes.LoadPosts;
}

export class LoadPostsSuccess implements Action {
  readonly type = DashboardActionTypes.LoadPostsSuccess;

  constructor(public posts: Post[]) {}
}

export type DashboardActions = LoadPosts | LoadPostsSuccess;
