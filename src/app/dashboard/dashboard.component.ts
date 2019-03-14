import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from './post.model';
import { State } from './dashboard.reducer';
import { LoadPosts } from './dashboard.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  posts$: Observable<Post[]>;
  category$: Observable<string>;

  constructor(private store: Store<State>) {
    this.posts$ = this.store.select('dashboard', 'posts');
    this.category$ = this.store.select('dashboard', 'category');
  }

  ngOnInit() {
    this.store.dispatch(new LoadPosts());
  }
}
