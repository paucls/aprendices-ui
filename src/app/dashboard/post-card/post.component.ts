import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Post } from '../post.model';
import { State } from '../dashboard.reducer';
import { ToggleCategory } from '../dashboard.actions';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {

  @Input() post: Post;

  constructor(private store: Store<State>) {}

  toggleCategory() {
    this.store.dispatch(new ToggleCategory(this.post.category));
    this.scrollToTop();
  }

  private scrollToTop() {
    window.scrollTo(0, 0);
  }
}
