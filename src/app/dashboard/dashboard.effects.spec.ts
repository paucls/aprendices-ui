import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { DashboardEffects } from './dashboard.effects';
import { PostsService } from './posts.service';

describe('DashboardEffects', () => {
  let actions$: Observable<any>;
  let effects: DashboardEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DashboardEffects,
        {
          provide: PostsService,
          useValue: jasmine.createSpyObj('PostsService', ['getPosts'])
        },
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(DashboardEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
