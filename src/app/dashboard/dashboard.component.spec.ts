import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatGridListModule } from '@angular/material';

import { DashboardComponent } from './dashboard.component';
import { Post } from './post.model';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { combineReducers, Store, StoreModule } from '@ngrx/store';

import * as fromRoot from '../reducers';
import { reducer, State } from './dashboard.reducer';
import { LoadCategories, LoadPosts } from './dashboard.actions';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let element;
  let fixture: ComponentFixture<DashboardComponent>;
  let store: Store<State>;

  const posts: Post[] = [{
    author: 'John Doe',
    category: 'Katas',
    content: 'Accelerate\'s definition of developer productivity, Will Larson (@Lethai) \n' +
      'https://lethain.com/accelerate-developer-productivity/',
    date: new Date('2018-09-10T00:00:00')
  }];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [DashboardComponent],
      imports: [
        StoreModule.forRoot({
          ...fromRoot.reducers,
          feature: combineReducers(reducer)
        }),
        MatGridListModule
      ]
    }).compileComponents();

    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should dispatch an action to load categories on initialization', () => {
    expect(store.dispatch).toHaveBeenCalledWith(new LoadCategories());
  });

  it('should dispatch an action to load posts on initialization', () => {
    expect(store.dispatch).toHaveBeenCalledWith(new LoadPosts());
  });
});
