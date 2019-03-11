import { Component } from '@angular/core';
import { Post } from './post.model';
import { Store } from '@ngrx/store';
import { State } from './dashboard.reducer';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  posts: Post[] = [];

  constructor(private store: Store<State>) {}
}
