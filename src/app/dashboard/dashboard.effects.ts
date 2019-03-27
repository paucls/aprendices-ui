import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { DashboardActionTypes, LoadOldPostsSuccess, LoadPostsSuccess } from './dashboard.actions';
import { map, mergeMap, take } from 'rxjs/operators';
import { PostsService } from './posts.service';

@Injectable()
export class DashboardEffects {

  @Effect()
  loadPosts$ = this.actions$.pipe(ofType(DashboardActionTypes.LoadPosts),
    mergeMap(() => this.postsService.getPosts()
      .pipe(
        map(posts => new LoadPostsSuccess(posts))
      )
    ));

  @Effect()
  loadOldPosts$ = this.actions$.pipe(
    ofType(
      DashboardActionTypes.SearchPosts,
      DashboardActionTypes.ToggleCategory
    ),
    take(1),
    mergeMap(() => this.postsService.getOldPosts()
      .pipe(
        map(posts => new LoadOldPostsSuccess(posts))
      )
    ));

  constructor(private actions$: Actions, private postsService: PostsService) {}
}
