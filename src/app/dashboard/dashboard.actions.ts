import { Action } from '@ngrx/store';
import { Post } from './post.model';

export enum DashboardActionTypes {
  LoadPosts = '[Dashboard] Load Posts',
  LoadPostsSuccess = '[Dashboard] Load Posts Success',
  LoadOldPosts = '[Dashboard] Load Old Posts',
  LoadOldPostsSuccess = '[Dashboard] Load Old Posts Success',
  ToggleCategory = '[Dashboard] Toggle Category',
  SearchPosts = '[Dashboard] Search Posts'
}

export class LoadPosts implements Action {
  readonly type = DashboardActionTypes.LoadPosts;
}

export class LoadPostsSuccess implements Action {
  readonly type = DashboardActionTypes.LoadPostsSuccess;

  constructor(public posts: Post[]) {}
}

export class LoadOldPosts implements Action {
  readonly type = DashboardActionTypes.LoadOldPosts;
}

export class LoadOldPostsSuccess implements Action {
  readonly type = DashboardActionTypes.LoadOldPostsSuccess;

  constructor(public oldPosts: Post[]) {}
}

export class ToggleCategory implements Action {
  readonly type = DashboardActionTypes.ToggleCategory;

  constructor(public category: string) {}
}

export class SearchPosts implements Action {
  readonly type = DashboardActionTypes.SearchPosts;

  constructor(public searchTerm: string) {}
}

export type DashboardActions =
  |LoadPosts
  |LoadPostsSuccess
  |LoadOldPosts
  |LoadOldPostsSuccess
  |ToggleCategory
  |SearchPosts;
