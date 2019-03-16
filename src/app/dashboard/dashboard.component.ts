import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from './post.model';
import { State } from './dashboard.reducer';
import { LoadPosts, ToggleCategory } from './dashboard.actions';
import { selectCategory, selectFilteredPosts, selectIsLoadingPosts } from './dashboard.selectors';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  posts$: Observable<Post[]>;
  category$: Observable<string>;
  isLoadingPosts$: Observable<boolean>;

  constructor(private store: Store<State>) {
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
