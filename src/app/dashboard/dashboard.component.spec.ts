import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatGridListModule } from '@angular/material';

import { DashboardComponent } from './dashboard.component';
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

  describe('on initialization', () => {
    it('should dispatch an action to load categories', () => {
      expect(store.dispatch).toHaveBeenCalledWith(new LoadCategories());
    });

    it('should dispatch an action to load posts', () => {
      expect(store.dispatch).toHaveBeenCalledWith(new LoadPosts());
    });
  });
});
