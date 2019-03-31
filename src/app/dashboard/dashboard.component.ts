import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from './post.model';
import { FilterCategory, State } from './dashboard.reducer';
import { LoadCategories, LoadPosts, ToggleCategory } from './dashboard.actions';
import { selectCategories, selectFilteredPosts, selectIsLoadingPosts } from './dashboard.selectors';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  categories$: Observable<FilterCategory[]>;
  posts$: Observable<Post[]>;
  isLoadingPosts$: Observable<boolean>;

  constructor(private store: Store<State>) {
    this.categories$ = this.store.select(selectCategories);
    this.posts$ = this.store.select(selectFilteredPosts);
    this.isLoadingPosts$ = this.store.select(selectIsLoadingPosts);
  }

  ngOnInit() {
    this.store.dispatch(new LoadCategories());
    this.store.dispatch(new LoadPosts());
  }

  unselectCategory(category: string) {
    this.store.dispatch(new ToggleCategory(category));
  }
}
