import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from './post.model';
import { State } from './dashboard.reducer';
import { LoadPosts, ToggleCategory } from './dashboard.actions';
import { selectCategories, selectCategory, selectFilteredPosts, selectIsLoadingPosts } from './dashboard.selectors';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  categories$: Observable<string[]>;
  category$: Observable<string>;
  posts$: Observable<Post[]>;
  isLoadingPosts$: Observable<boolean>;

  constructor(private store: Store<State>) {
    this.categories$ = this.store.select(selectCategories);
    this.category$ = this.store.select(selectCategory);
    this.posts$ = this.store.select(selectFilteredPosts);
    this.isLoadingPosts$ = this.store.select(selectIsLoadingPosts);
  }

  ngOnInit() {
    this.store.dispatch(new LoadPosts());
  }

  unselectCategory(category: string) {
    this.store.dispatch(new ToggleCategory(null));
  }
}
