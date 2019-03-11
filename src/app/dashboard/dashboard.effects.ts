import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { DashboardActionTypes, LoadPostsSuccess } from './dashboard.actions';
import { map, mergeMap } from 'rxjs/operators';
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

  constructor(private actions$: Actions, private postsService: PostsService) {}
}
