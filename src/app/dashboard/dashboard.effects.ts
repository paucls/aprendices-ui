import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { DashboardActionTypes, LoadCategoriesSuccess, LoadOldPosts, LoadOldPostsSuccess, LoadPostsSuccess } from './dashboard.actions';
import { map, mergeMap, take } from 'rxjs/operators';
import { PostsService } from './posts.service';

@Injectable()
export class DashboardEffects {

  @Effect()
  loadCategories$ = this.actions$.pipe(ofType(DashboardActionTypes.LoadCategories),
    mergeMap(() => this.postsService.getCategories()
      .pipe(
        map(categories => new LoadCategoriesSuccess(categories))
      )
    ));

  @Effect()
  loadPosts$ = this.actions$.pipe(ofType(DashboardActionTypes.LoadPosts),
    mergeMap(() => this.postsService.getPosts()
      .pipe(
        map(posts => new LoadPostsSuccess(posts))
      )
    ));

  @Effect()
  triggerLoadOldPosts$ = this.actions$.pipe(
    ofType(
      DashboardActionTypes.SearchPosts,
      DashboardActionTypes.ToggleCategory
    ),
    take(1), // Trigger the load of old posts only one time
    map(() => new LoadOldPosts()));

  @Effect()
  loadOldPosts$ = this.actions$.pipe(
    ofType(
      DashboardActionTypes.LoadOldPosts
    ),
    mergeMap(() => this.postsService.getOldPosts()
      .pipe(
        map(posts => new LoadOldPostsSuccess(posts))
      )
    ));

  constructor(private actions$: Actions, private postsService: PostsService) {}
}
